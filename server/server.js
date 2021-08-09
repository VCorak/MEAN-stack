import {Animal} from "../animalDB/src/app/animal";

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const fs = require('fs');

// const animalController = require('./controllers/animalController')

const PORT = 9100;

mongoose.connect('mongodb+srv://new-animal:zivotinja1234@cluster0.khkyf.mongodb.net/test?authSource=admin&replicaSet=atlas-v6988y-shard-0&readPreference=primary&animalDB=MongoDB%20Compass&ssl=true', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("mongoose connected");
});

// Data to database

app.get('/add-animal', (req, res) => {
    const animal = new Animal({
        animalImage: '',
        animalName: 'Fluffy',
        animalAge: '1',
        animalSpecies: 'Panda',
        animalClass: 'mammal',
        animalFood: 'bamboo'
    });

    animal.save()
        .then((result) => {
            res.send(result + "for add animal")
        })
        .catch((err) => {{
            console.log(err + "for add animal")
        }})
})

app.get('/', function (request, response) {
    response.send('Hello from server');
});

// Get data from database
app.get('/allAnimals', (req, res) => {
    Animal.find()
        .then((result) => {
            res.send(result);
            console.log(result + "for allanimals")
        })
        .catch((err) => {
            console.log(err + "for allanimals")
        });
});

app.listen(PORT, function () {});


// app.use('/', animalController);