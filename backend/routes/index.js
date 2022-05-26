const route = require('express').Router()

route.get('/', (req, res) => {
    res.status(200).json({
        message: "Organify"
    })
})

const userRoutes = require('./user')
const postingRoutes = require('./product')
const orderRoutes = require('./order')

route.use('/users', userRoutes)
route.use('/products', postingRoutes)
route.use('/orders', orderRoutes)

module.exports = route