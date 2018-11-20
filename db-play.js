//require mongoose and express
const mongoose = require('mongoose');
const express = require('express');
//require car template from models folder
const Car = require('./models/car');
//initiate express
const app = express();
//connect mongoose to mongodb localhost
mongoose.connect('mongodb://localhost/27017');

//new car constructor
const ride = new Car({
  name: "volvo",
  yearOfRelease: 1995,
  maxSpeed: 140,
  modelNumber: 00078
});


ride.save().then(() => console.log('vroom vroom'));

