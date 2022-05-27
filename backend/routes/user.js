const userRoute = require('express').Router()
const UserController = require('../controllers/UserController')
const authentication = require('../middlewares/auth')


userRoute.get('/', UserController.getAllUsers)
userRoute.post('/register', UserController.register)
userRoute.post('/login', UserController.login)


module.exports = userRoute