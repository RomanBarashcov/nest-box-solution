'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserResetPasswordToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserResetPasswordToken.init({
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserResetPasswordToken',
  });
  return UserResetPasswordToken;
};