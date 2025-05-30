// src/routes/damvolume.routes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const damVolumeController = require('../controllers/damvolume.controller');

router.post('/upload', upload.single('file'), damVolumeController.uploadExcel);

module.exports = router;
