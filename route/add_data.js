const express = require('express');
const router = express.Router();
const DataModel = require('../models/data_model');

router.get('/',async (req, res) => {
    res.send(await DataModel.find());
})

router.post('/',async (req, res) => {
    const data =await new DataModel({
        name: req.body.name,
        email: req.body.email,
    }
    );
        const result = await data.save();
        res.send(result);
})

module.exports = router