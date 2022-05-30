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
            const imagenames = req.files.
            imagenames.forEach(imagename=> {
                console.log(imagenames.filename)
            })
            const { name, desc, price, stock, expire, weight, category, condition, totalSold, rating, views, unit} = req.body
            
            // let result = await Product.create({
            //     name, desc, price, stock, stock, expire, weight, category, condition, totalSold, rating, views, unit, 
            //     UserId:id
            // })
            console.log(imagenames)
            res.status(201).json(result)
        } catch(err){
            res.status(500).json(err)
        }
    }
    //just for admin
    static async update (req, res){
        try{
            const id = +req.params.id
            const { name, desc, price, stock, expire, weight, category, condition, totalSold,  unit} = req.body
            let result = await Product.update({
                name, desc, price, stock, stock, expire, weight, category, condition, totalSold,  unit,
                where:{ id }
            })
            res.status(201).json(result)
        } catch(err){
            res.status(500).json(err)
        }
    }
    static async getProductById (req, res){
        const id = +req.params.id
        try{
            let result = await Product.findOne({
                where: { id }
            })
            let views = await Product.update({
                views: views  + 1,
                where: {id:result.id}
            })
            res.status(201).json(result)
        } catch(err){
            res.status(500).json(err)
        }   
    }
}

module.exports = ProductController