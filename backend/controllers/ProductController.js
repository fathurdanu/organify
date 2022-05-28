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
            const imagenames = req.files.filename
            const { name, desc, price, stock, expire, weight, category, condition, totalSold, rating, views, unit} = req.body
            
            let result = await Product.create({
                name, desc, price, stock, stock, expire, weight, category, condition, totalSold, rating, views, unit, 
                UserId:id
            })
            imagenames.forEach(imagenames => {
                let image = ProductImage.create({
                    filename:imagenames,
                    ProductId:result.id
                })
            });
            res.status(201).json(image)
        } catch(err){
            res.status(500).json(err)
        }
    }
    //just for admin
    static async update (req, res){
        try{
            const id = req.params.id
            const { name, desc, price, stock, expire, weight, category, condition, totalSold, rating, views, unit} = req.body
            let result = await Product.create({
                name, desc, price, stock, stock, expire, weight, category, condition, totalSold, rating, views, unit,
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
            let result = await Product.findByPk({
                where: { id }
            })
            res.status(201).json(result)
        } catch(err){
            res.status(500).json(err)
        }   
    }
}

module.exports = ProductController