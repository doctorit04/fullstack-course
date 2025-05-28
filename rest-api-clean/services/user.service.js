const { User } = require('../models');

exports.findAll = async () => {
  return await User.findAll();
};

exports.create = async (data) => {
  return await User.create(data);
};