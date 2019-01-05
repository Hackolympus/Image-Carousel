var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db'); //runs ./db. do not delete.
var Router = require('./resources/Routers.js');
var path = require('path');

// Create the Express application:
var app = express();

// Attach middleware:
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../react-client/dist')));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
    });
app.use('/listing', Router);

module.exports = app;