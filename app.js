const express = require('express');
require('dotenv').config();
const mysql = require('mysql');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const dbService = require('./databaseService/dbService');

//app
const app = express();

//middleware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//route middlware
app.use(userRoutes);

//app listen
const PORT = process.env.PORT;
app.listen(PORT, () => {console.log(`App running at port:${PORT}`)});