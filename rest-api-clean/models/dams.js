'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dams extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dams.init({
    geography_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    capacity_amount: DataTypes.DECIMAL,
    lower_threshold: DataTypes.DECIMAL,
    upper_threshold: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Dams',
  });
  return Dams;
};