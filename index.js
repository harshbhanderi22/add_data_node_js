const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/dataform");


const add_data = require('./route/add_data');
app.use('/add_data', add_data);

app.listen(3000);