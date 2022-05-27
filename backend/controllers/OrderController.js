const { Product, Order, LineItem, ShoppingCart } = require('../models')

class OrderController {
    static async getAllOrders(req, res) {
        try {
            let orders = await LineItem.findAll({
                include: Product
            })
            res.status(200).json(orders)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    // static async create(req, res) {
    //     try {
    //         const { UserId, } = req.body
    //         let result = await Order.create({
    //             UserId
    //         })
    //         res.status(201).json(result)
    //     } catch (err) {
    //         res.status(500).json(err)
    //     }
    // }

    static async checkout(req, res) {
        try {
            const { UserId } = req.body
            
            const shoppingCart = await ShoppingCart.findOne({
                where: { status: "open", UserId }
            })

            const lineItems = await LineItem.findAll({
                include: [Product],
                where: {ShoppingCartId:shoppingCart.id}
            })
            
            let subtotal = 0;
            lineItems.forEach(lineItem => {
                subtotal = subtotal + (lineItem.qty*lineItem.Product.price)
            })

            console.log(subtotal)

            // let result = await Order.create({
            //     OrderId,
            //     subtotal:,
            //     discount: ,
            //     tax: ,
            //     totalDue: ,
            //     totalQty: ,
            //     paymentTrasaction: ,
            // })

            res.status(201).json(lineItems)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async createCart(req, res) {
        try {
            const { UserId,status } = req.body;
            let result = await ShoppingCart.create({
                UserId,status
            });
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async addToCart(req, res) {
        try {
            const { UserId, qty, ProductId } = req.body;

            // cari keranjang yang open
            const shoppingCart = await ShoppingCart.findOne({
                where: { status: "open", UserId:UserId }
            })

            // masukin ke keranjang
            let result = await LineItem.create({
                ShoppingCartId: shoppingCart.id,
                ProductId,
                qty,
                status: "cart" //masukin hooks aja nanti
            })

            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

}

module.exports = OrderController