const userService = require('../services/user.service');

exports.getAllUsers = async (req, res) => {
  const users = await userService.findAll();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userService.create({ name, email, password });
  res.status(201).json(user);
};
