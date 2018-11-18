const express = require('express');
const mongoose = require('mongoose');
const Car = require('./models/car');
const app = express();

mongoose.connect('mongodb://localhost/27017');

// app.get('/', (req, res) => res.json({
//   name: "Nureni",
//   age: 27
// }));

app.get('/cars', (req, res) => {
  car.find().then((cars) => {
    res.json(cars);
  });
});



app.listen(3000, () => console.log(`good to go`));