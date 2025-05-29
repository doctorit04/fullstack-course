const userService = require('../services/user.service');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.findByEmail(email);
  if (!user) {
    return res.status(401).json({ message: 'Email not found' });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

    // สร้าง JWT token
  const token = jwt.sign(
    { id: user.id, email: user.email }, 
    process.env.JWT_SECRET, 
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );


  // สำหรับตอนนี้ ส่งข้อมูลผู้ใช้กลับ (ไม่ควรส่ง password)
  const { password: _, ...userData } = user.toJSON();
  res.json(
    { 
        message: 'Login successful', 
        token,
        user: userData 
    });
};
