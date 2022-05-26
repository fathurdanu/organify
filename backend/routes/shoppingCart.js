const shoppingCartRoute = require('express').Router()
const ShoppingCartController = require('../controllers/ShoppingCartController')

shoppingCartRoute.get('/', ShoppingCartController.getAllShoppingCarts)


module.exports = shoppingCartRoute