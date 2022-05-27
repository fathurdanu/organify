const { Product, Order, LineItem } = require('../models')

class OrderController{
    static async getAllOrders (req, res){
        try{
            let orders = await Order.findAll({
                // include : Product
            })
            res.status(200).json(orders)
        } catch(err){
            res.status(500).json(err)
        }
    }
    static async create (req, res){
        try{
            const { OrderId, UserId, qty, ProductId } = req.body
            let result = await Order.create({
                UserId
            })
            await LineItem.create({
                OrderId,
                ProductId,
                qty
            })
            let resultGet = await LineItem.findOne({
                include: Product
            },{where: {id:ProductId}})

            let tempPrice = resultGet.Product.price
            let tempQty = resultGet.qty
            let total = tempPrice * tempQty
            if (qty>2){
                let tempDiscount = total * 0.1
            } 
            let resultUpdate = await Order.update({
                subtotal: total,
                discount : tempDiscount
            },{where: {id:resultGet.OrderId}})

            console.log(total)
            console.log(tempPrice)
            console.log(tempqty)
            res.status(201).json(resultUpdate)
        } catch(err){
            res.status(500).json(err)
        }
    }
 
    // static async checkout (req, res){
    //     try{
            //  const { OrderId, UserId, qty, ProductId, price } = req.body
            // let result = await LineItem.create({
            //         include : Product,
            //         OrderId,
            //         ProductId,
            //         qty
            //     })
    //         console.log([result.Product])
    //         // const subtotal = result.qty*Product.price
    //         // let updateOrder = await Order.update({
    //         //     subtotal: subtotal
    //         // },{where:
    //         //     {OrderId : result.OrderId}
    //         // })
    //         // console.log(updateOrder)
    //         // console.log(subtotal)
    //         // console.log(searchProduct)
    //         res.status(201).json(result)
    //     } catch(err){
    //         res.status(500).json(err)
    //     }
    // }
    // static
}

module.exports = OrderController