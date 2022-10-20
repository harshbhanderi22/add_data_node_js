const express = require('express');
const app = express();
const add_data = require('./route/add_data');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
mongoose.connect("mongodb://localhost:27017/dataform");
dotenv.config();

app.use('/add_data', add_data);

app.listen(3000);