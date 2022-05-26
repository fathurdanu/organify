'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product) //untuk admin
      User.hasMany(models.Order)
      User.hasMany(models.ShoppingCart)
    }
  }
  User.init({
    username:{
      type: DataTypes.STRING,
      Validate: {
        notEmpty: {
          message:"Username must not be empty"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      Validate: {
        notEmpty: {
          message:"Email must not be empty"
        }
      }
    }, 
    password: {
      type: DataTypes.STRING,
      Validate: {
        notEmpty: {
          message:"Password must not be empty"
        }
      }
    }, 
    salt: DataTypes.INTEGER,
    birthday: DataTypes.DATE,
    gender: DataTypes.BOOLEAN,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};