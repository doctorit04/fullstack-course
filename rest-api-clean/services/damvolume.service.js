// src/services/damvolume.service.js
const { DamsVolume } = require('../models');

exports.bulkInsert = async (dataCollection) => {

  const formattedData = dataCollection.map(item => ({
    dam_code: item.dam_code,
    monitor_date: item.monitor_date,
    measure_level: item.measure_level,
    volume_amount: item.volume_amount, 
    utilize_amount: item.utilize_amount,
    capacity_remain: item.capacity_remain,
    createdAt: new Date(),
    updatedAt: new Date()
  }));

  await DamsVolume.bulkCreate(formattedData, { ignoreDuplicates: true });
};

exports.getDamVolumesByCode = async (damCode) => { 
  return await DamsVolume.findAll({
    where: { dam_code: damCode },
    order: [['monitor_date', 'ASC']]
  });
}