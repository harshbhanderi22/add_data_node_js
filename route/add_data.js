const express = require('express');
const router = express.Router();
const DataModel = require('../models/data_model');

router.get('/', async (req, res) => {
    res.send("Your are on Get page")
    res.send(await DataModel.find());
})

router.post('/',async (req, res) => {
    const data =await new DataModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }
    );
    const result = await data.save();
    console.log(result);
    res.send(result);
})

module.exports = router