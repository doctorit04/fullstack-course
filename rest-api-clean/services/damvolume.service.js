// src/services/damvolume.service.js
const { DamVolume } = require('../models');

exports.bulkInsert = async (data) => {

  //const damCode = data.map(item => item.dam_code);


  const formattedData = data.map(item => ({
    dam_code: item.dam_code,
    monitor_date: item.monitor_date,
    measure_level: item.measure_level,
    volume_amount: item.volume_amount, 
    utilize_amount: item.utilize_amount,
    capacity_remain: item.capacity_remain,
    createdAt: new Date(),
    updatedAt: new Date()
  }));

  await DamVolume.bulkCreate(formattedData, { ignoreDuplicates: true });
};