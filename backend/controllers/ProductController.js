const { Product, User, ProductImage } = require('../models')

class ProductController{
    static async getAllProducts (req, res){
        try{
            let products = await Product.findAll({
                include : User
            })
            res.status(200).json(products)
        } catch(err){
            res.status(500).json(err)
        }
    }
    //just for admin
    static async create (req, res){
        try{
            const id = req.userData.id
            const imagenames = req.files
            const { name, desc, price, stock, expire, weight, category, condition, totalSold, rating, views, unit} = req.body
            
            const result = await Product.create({
                name, desc, price, stock, stock, expire, weight, category, condition, totalSold, rating, views, unit, 
                UserId:id
            })

            console.log(imagenames)

            imagenames.forEach(async (imagename,index) => {
                const isPrimary = (index===0)? true : false;
                await ProductImage.create({
                    filename:imagename.filename,
                    ProductId:result.id,
                    fileType:imagename.mimetype,
                    primary:isPrimary
                })
            });
            res.status(201).json(result);
        } catch(err){
            res.status(500).json(err)
        }
    }
    //just for admin
    static async update (req, res){
        try{
            const id = req.params.id
            const { name, desc, price, stock, expire, weight, category, condition, totalSold, rating, views, unit} = req.body
            let result = await Product.update({
                name, desc, price, stock, stock, expire, weight, category, condition, totalSold, rating, views, unit,
            },{
                where:{ id }
            })
            res.status(201).json(result)
        } catch(err){
            res.status(500).json(err)
        }
    }
    static async getProductById (req, res){
        const id = req.params.id
        try{
            let result = await Product.findByPk(id,{
                include: [ProductImage]
            });
            res.status(201).json(result)
        } catch(err){
            res.status(500).json(err)
        }   
    }
}

module.exports = ProductController