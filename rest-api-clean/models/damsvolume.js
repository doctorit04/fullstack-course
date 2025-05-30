'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DamsVolume extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DamsVolume.init({
    dam_code: DataTypes.STRING,
    monitor_date: DataTypes.DATE,
    measure_level: DataTypes.DECIMAL,
    volume_amount: DataTypes.DECIMAL,
    utilize_amount: DataTypes.DECIMAL,
    capacity_remain: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'DamsVolume',
  });
  return DamsVolume;
};