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


//Update user
exports.updateUser = async (req, res) => {
  const { id } = req.params;


    //check if User is exist
    const existingUser = await userService.findById(id);
    if (!existingUser) {        
        return res.status(404).json({ message: 'User not found' });
    }

  const { name, email, password } = req.body;
  const user = await userService.update(id, { name, email, password });
  if (user) {
    res.json(user);
  } else {
    res.status(500).json({ message: 'Application Error' });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

    //check if User is exist
    const existingUser = await userService.findById(id);
    if (!existingUser) {        
        return res.status(404).json({ message: 'User not found' });
    }


  const deleted = await userService.delete(id);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(500).json({ message: 'Application Error' });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.findById(id);
  if (user) {
    res.json(user);
  }
  else {
    res.status(404).json({ message: 'User not found' });
  }
}

