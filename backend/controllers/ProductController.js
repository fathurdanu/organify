const { Product, User, Order, ShoppingCart } = require('../models')

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
    static async create (req, res){
        try{
            const { name, UserId, price } = req.body
            let result = await Product.create({
                name, UserId, price
            })
            res.status(201).json(result)
        } catch(err){
            res.status(500).json(err)
        }
    }
}

module.exports = ProductController