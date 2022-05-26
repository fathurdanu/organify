const orderRoute = require('express').Router()
const OrderController = require('../controllers/OrderController')

orderRoute.get('/', OrderController.getAllOrders)
orderRoute.post('/', OrderController.create)
orderRoute.post('/checkout', OrderController.checkout)

module.exports = orderRoute