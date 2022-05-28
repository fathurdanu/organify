const productRoute = require('express').Router()
const ProductController = require('../controllers/ProductController')
const authentication = require('../middlewares/auth')

productRoute.get('/', ProductController.getAllProducts)
productRoute.post('/', authentication, ProductController.create)
productRoute.put('/', ProductController.update)
productRoute.get('/:id', ProductController.getProductById)

module.exports = productRoute