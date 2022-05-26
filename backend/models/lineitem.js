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
      LineItem.belongsTo(models.ShoppingItem)
      LineItem.belongsTo(models.Order)
    }
  }
  LineItem.init({
    qty:{
      type: DataTypes.INTEGER,
      Validate: {
        notEmpty: {
          message:"Quantity must not be empty"
        }
      }
    }, 
    status: {
      type: DataTypes.STRING,
      Validate: {
        notEmpty: {
          message:"Status must not be empty"
        }
      }
    },
    ProductId: {
      type: DataTypes.INTEGER,
      Validate: {
        notEmpty: {
          message:"Product Id must not be empty"
        }
      }
    }, 
    ShopId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LineItem',
  });
  return LineItem;
};