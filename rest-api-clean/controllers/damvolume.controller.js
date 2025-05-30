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
    const datas = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // ลบไฟล์หลังจากอ่านแล้ว
    fs.unlinkSync(filePath);

    console.log('Data from Excel:', datas);

    if( datas.length === 0) {
      return res.status(400).json({ error: 'ไม่มีข้อมูลในไฟล์ Excel' });
    }

    const damCode = datas[0].code;

    var idx = 1;
    var dataCollection = [];
    datas.forEach(element => {
        if(idx >=3 && element.name) { 
            const data = {
                dam_code: damCode,
                monitor_date: element.code,
                measure_level: element.name,
                volume_amount: element.__EMPTY,
                utilize_amount: element.__EMPTY_1,
                capacity_remain: element.__EMPTY_2
            };
            dataCollection.push(data);
        }
        idx++;
    });
    

    // ตรวจสอบว่ามีข้อมูลหรือไม่
    console.log('Data to be inserted:', dataCollection);

    // ส่งข้อมูลให้ service
    await damVolumeService.bulkInsert(dataCollection);

    res.json({ message: 'อัปโหลดสำเร็จ', data: dataCollection.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'เกิดข้อผิดพลาดในการอัปโหลด' });
  }
};
