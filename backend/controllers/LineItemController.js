const { LineItem } = require('../models')

class LineItemController{
    static async getAllLineItems (req, res){
        try{
            let products = await LineItem.findAll({
            })
            res.status(200).json(products)
        } catch(err){
            res.status(500).json(err)
        }
    }
}
module.exports = LineItemController