// Importing required modules
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import winston from 'winston';
import mongoose from 'mongoose';
const config = require('./DB.js');
const postRoute = require('./routes/index.js');

// Defining port
const port = process.env.PORT || 9000;

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

// Defining app
const app = express();

// Defining middlewares
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining the Routes
app.use('/api', require('./routes/index'));

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;
