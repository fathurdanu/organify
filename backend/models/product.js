'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    Product.belongsTo(models.User) //type admin
    Product.hasMany(models.ProductImage)
    Product.belongsToMany(models.Order, { through: models.LineItem })
    Product.belongsToMany(models.ShoppingCart, { through: models.LineItem })
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      Validate: {
        notEmpty: {
          message:"Type must not be empty"
        }
      }
    },
    desc: DataTypes.TEXT,
    price: {
      type: DataTypes.INTEGER,
      Validate: {
        notEmpty: {
          message:"Price must not be empty"
        }
      }
    },
    stock: DataTypes.INTEGER,
    expire: DataTypes.DATE,
    weight: DataTypes.INTEGER,
    category: DataTypes.STRING,
    condition: DataTypes.STRING,
    totalSold: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    UserId: {
      type: DataTypes.INTEGER,
      Validate: {
        notEmpty: {
          message:"User Id must not be empty"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};