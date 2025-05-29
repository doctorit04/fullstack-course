const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// นำเข้า middleware สำหรับการตรวจสอบ token
const { authenticateToken } = require('../middleware/auth.middleware');


router.get('/', authenticateToken,userController.getAllUsers);
router.post('/', authenticateToken, userController.createUser);

//เพิ่มเติมเส้นทางสำหรับการจัดการผู้ใช้
router.put('/:id', authenticateToken, userController.updateUser);
router.delete('/:id', authenticateToken, userController.deleteUser);
router.get('/:id', authenticateToken, userController.getUserById);


module.exports = router;