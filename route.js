//init express route

const express = require('express');
const { ObjectId } = require('mongodb');
const { Data, Pasien } = require('./database');
const router = express.Router();

//set default API response
router.get('/', function(req, res){
    res.json({
        status: 'API Its Working',
        message: 'API is running...!',
    });
});

//Create new data
router.post('/api/v1/create', async (req, res) =>{
    try {
        let response = await Pasien.insertOne(req.body);
        res.status(200).json({
            status: "success",
            message: "Data berhasil ditambahkan",
        });
    } catch (e) {
        res.status(400).json({
            status: "error",
            message: "Data yang anda masukkan tidak benar",
        });
    }
    
});

//get all data
router.get('/api/v1/pasien', async (req, res) => {
    try {
        let response = await Pasien.find({}).toArray();
        res.status(200).json({
            status: "success",
            message: "Data berhasil didapatkan",
            data: response
        });
    } catch (e) {
        res.status(500).json({
            status: "error",
            message: "internal server error",
        });
    }
});

module.exports = router;
