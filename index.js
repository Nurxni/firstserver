//require dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Car = require('./models/car');
const app = express();

//initialize body-parser and db connection *resolved deprecated url string parser* 
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/27017', { useNewUrlParser: true });

//display all cars in db
app.get('/cars', (req, res) => {
  Car.find().then((cars) => {
    res.json(cars);
  });
});

//display specific car 
app.get('/cars/:name', (req, res) => {
  const name = req.params.name;
  Car.findOne({name: name}).then((car) => {
    res.json(car);
  });
});

//create a car
app.post('/cars', (req, res) => {
  const body = req.body;
  const newCar = new Car(body);
  newCar.save().then((car) => {
    res.json(car);
  });
});


//update the content of a specific car
app.put('/cars/:name', (req, res) => {
  const name = req.params.name;
  Car.findOneAndUpdate({name: name}, {maxSpeed: 5000}).then(() => {
    res.json(car);
  });
});


//delete a specific car
app.delete('/cars/:name', (req, res) => {
  const name = req.params.name;
  Car.findOneAndRemove({name: name}).then((car) => {
    res.json(car);
  });
});


app.listen(3000, () => console.log(`good to go`));