// src/controllers/damvolume.controller.js
const damVolumeService = require('../services/damvolume.service');
const XLSX = require('xlsx');
const fs = require('fs');

exports.uploadExcel = async (req, res) => {
  try {
    const filePath = req.file.path;

    // อ่าน Excel
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // ลบไฟล์หลังจากอ่านแล้ว
    fs.unlinkSync(filePath);

    console.log('Data from Excel:', data);

    // ส่งข้อมูลให้ service
    //await damVolumeService.bulkInsert(data);

    res.json({ message: 'อัปโหลดสำเร็จ', data: data.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'เกิดข้อผิดพลาดในการอัปโหลด' });
  }
};
