const { Product, Order, LineItem } = require('../models')

class OrderController{
    static async getAllOrders (req, res){
        try{
            let orders = await LineItem.findAll({
                include : Product
            })
            res.status(200).json(orders)
        } catch(err){
            res.status(500).json(err)
        }
    }
    static async create (req, res){
        try{
            const { UserId,} = req.body
            let result = await Order.create({
                UserId
            })
            res.status(201).json(result)
        } catch(err){
            res.status(500).json(err)
        }
    }

    static async checkout (req, res){
        try{
            const { OrderId, UserId, qty, ProductId, price } = req.body
            let result = await LineItem.create({
                    include : Product,
                    OrderId,
                    ProductId,
                    qty
                })
            console.log([result.Product])
            // const subtotal = result.qty*Product.price
            // let updateOrder = await Order.update({
            //     subtotal: subtotal
            // },{where:
            //     {OrderId : result.OrderId}
            // })
            // console.log(updateOrder)
            // console.log(subtotal)
            // console.log(searchProduct)
            res.status(201).json(result)
        } catch(err){
            res.status(500).json(err)
        }
    }
}

module.exports = OrderController