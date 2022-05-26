const userRoute = require('express').Router()
const UserController = require('../controllers/UserController')

userRoute.get('/', UserController.getAllUsers)
userRoute.post('/', UserController.create)

module.exports = userRoute