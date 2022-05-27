'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LineItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LineItem.belongsTo(models.Product)
      LineItem.belongsTo(models.ShoppingCart)
      LineItem.belongsTo(models.Order)
    }
  }
  LineItem.init({
    qty: DataTypes.INTEGER,
    status: DataTypes.STRING,
    ProductId: DataTypes.INTEGER,
    ShoppingCartId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LineItem',
    hooks:{
      beforeCreate: function( lineItem, options) {
        lineItem.status = "cart"
      }
    }
  });
  return LineItem;
};