const { User } = require('../models');

exports.findAll = async () => {
  return await User.findAll();
};

exports.create = async (data) => {
  return await User.create(data);
};


// Update user
exports.update = async (id, data) => {
  const user = await User.findByPk(id);
  if (user) {
    //เทียบเท่า UPDATE USER SET name = 'newName', email = 'newEmail' WHERE id = id;
    return await user.update(data);
  }
  return null;
};


// Delete user
exports.delete = async (id) => {
  const user = await User.findByPk(id);
  if (user) {
    //เทียบเท่า DELETE FROM USER WHERE id = id;
    await user.destroy();
    return true;
  }
  return false;
};


// Get user by ID
exports.findById = async (id) => {
    //เทียบเท่า SELECT * FROM USER WHERE id = id;
  return await User.findByPk(id);
};

