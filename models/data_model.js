const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    name: {
        typeof: String,
        require: false,
         
    },
    email: {
        typeof: String,
        require: false,
     },

});

module.exports = mongoose.model('DataModel', DataSchema);