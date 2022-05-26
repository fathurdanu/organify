const { ShoppingCart, User } = require('../models')

class ShoppingCartController{
    static async getAllShoppingCarts (req, res){
        try{
            let products = await ShoppingCart.findAll({
                include : User
            })
            res.status(200).json(products)
        } catch(err){
            res.status(500).json(err)
        }
    }
}
module.exports = ShoppingCartController