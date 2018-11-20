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

//create a car
app.post('/cars', (req, res) => {
  const body = req.body;
  const newCar = new Car(body);
  newCar.save().then((car) => {
    res.json(car);
  });
});

//display specific car by model number
app.get('/cars/:modelnumber', (req, res) => {
  const modelNumber = req.params.modelnumber;
  Car.findOne({modelNumber: modelNumber}).then((car) => {
    res.json(car);
  });
});


//update the content of a specific car
app.put('/cars/:modelnumber', (req, res) => {
  const modelNumber = req.params.modelnumber;
  Car.findOneAndUpdate({modelNumber: modelNumber}, {maxSpeed: 20000}).then(() => {
    res.json(car);
  });
});


//delete a specific car
app.delete('/cars/:modelnumber', (req, res) => {
  const modelNumber = req.params.modelnumber;
  Car.findOneAndRemove({modelNumber: modelNumber}).then((car) => {
    res.json(car);
  });
});


app.listen(3000, () => console.log(`good to go`));