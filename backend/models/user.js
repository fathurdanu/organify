'use strict';
const { encryptPwd } = require('../helpers/bcrypt')
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
    username: {
      type: DataTypes.STRING,
      Validate: {
        notEmpty: {
          message:"User must not be empty"
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
      type: DataTypes.INTEGER,
      Validate: {
        notEmpty: {
          message:"Password must not be empty"
        }
      }
    },
    salt: DataTypes.INTEGER,
    birthday: DataTypes.DATE,
    gender: DataTypes.BOOLEAN,
    avatar: DataTypes.STRING,
    type: {
      type: DataTypes.STRING,
      Validate: {
        notEmpty: {
          message:"Type must not be empty"
        }
      }
    },
  }, {
    hooks: {
      beforeCreate: function( user, options) {
        user.password = encryptPwd(user.password)
        //user.avatar = user.avatar || ('../images/ppdefault.jpg')
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};