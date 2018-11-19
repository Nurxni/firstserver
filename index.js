const express = require('express');
const mongoose = require('mongoose');
const Car = require('./models/car');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/27017');

// app.get('/', (req, res) => res.json({
//   name: "Nureni",
//   age: 27
// }));

app.get('/cars', (req, res) => {
  Car.find().then((cars) => {
    res.json(cars);
  });
});

app.get('/cars/:name', (req, res) => {
  const name = req.params.name;
  Car.findOne({name: name}).then((car) => {
    res.json(car);
  });
});

app.post('/cars', (req, res) => {
  const body = req.body;
  const newCar = new Car(body);
  newCar.save().then((car) => {
    res.json(car);
  });
});

app.put('/cars/:name', (req, res) => {
  const name = req.params.name;
  Car.findOneAndUpdate({name: name}, {maxSpeed: 5000}).then(() => {
    res.json(car);
  });
});

app.delete('/cars/id', (req, res) => {
  const id = req.body.id;
  Car.findOneAndRemove({id: _id}).then((car) => {
    res.json(car);
  });
});



app.listen(3000, () => console.log(`good to go`));