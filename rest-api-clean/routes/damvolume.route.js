// src/routes/damvolume.routes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const damVolumeController = require('../controllers/damvolume.controller');
const { authenticateToken } = require('../middleware/auth.middleware');

router.post('/upload', upload.single('file'), damVolumeController.uploadExcel);

router.get('/data/:code', authenticateToken, damVolumeController.getDamVolumes);

module.exports = router;
