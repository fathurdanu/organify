const productRoute = require('express').Router()
const ProductController = require('../controllers/ProductController')

productRoute.get('/', ProductController.getAllProducts)
productRoute.post('/', ProductController.create)

module.exports = productRoute