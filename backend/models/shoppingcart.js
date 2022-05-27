'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ShoppingCart.belongsToMany(models.Product, { through: models.LineItem })
      ShoppingCart.belongsToMany(models.Order, { through: models.LineItem })
      ShoppingCart.belongsTo(models.User)
    }
  }
  ShoppingCart.init({
    UserId: {
      type: DataTypes.INTEGER,
      Validate: {
        notEmpty: {
          message:"User Id must not be empty"
        }
      }
    },
    status: {
      type: DataTypes.STRING //tambahan
    },
  }, {
    sequelize,
    modelName: 'ShoppingCart',
  });
  return ShoppingCart;
};