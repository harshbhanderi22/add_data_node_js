const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number
});

module.exports = mongoose.model('test1', DataSchema);