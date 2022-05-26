const { User, Order, ShoppingCart } = require('../models')

class UserController{
    static async getAllUsers (req, res){
        try{
            let users = await User.findAll({
                include : [ Order, ShoppingCart]
            })
            res.status(200).json(users)
        } catch(err){
            res.status(500).json(err)
        }
    }

    static async create (req, res){
        try{
            const { username, email, password, salt, birthday, gender} = req.body
            let result = await User.create({
                username, email, password, salt, birthday, gender
            })
            res.status(201).json(result)
        } catch(err){
            res.status(500).json(err)
        }
    }
}

module.exports = UserController