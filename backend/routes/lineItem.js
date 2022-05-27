const lineItemRoute = require('express').Router()
const LineItemController = require('../controllers/LineItemController')

lineItemRoute.get('/', LineItemController.getAllLineItems)


module.exports = lineItemRoute