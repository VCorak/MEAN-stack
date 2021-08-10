// import {Animal} from "../animalDB/src/app/animal";

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
const Animal = require('./animalSchema');
const cors = require('cors');
const dotenv = require('dotenv');



const PORT = 9100;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

function readData() {
    let rawdata = fs.readFileSync('data/animals.json');
    let animal = JSON.parse(rawdata);
    console.log(animal);
    return animal;
}

function writeData(animal) {
    let allAnimals = readData();
    allAnimals.data.push(animal);
    let data = JSON.stringify(allAnimals);
    fs.writeFileSync('data/animals.json', data);
}

// Below you can define how your API handles a get or a post request.
// Try sending a get request to the root, you should get a "Hello from server" back.

app.get('/', function (request, response) {
    response.send('Hello from server');
});
// get for allAnimals
app.get('/allAnimals', function (request, response ) {
    let allAnimals= readData();
    response.send(allAnimals.data);
});

app.post('/', function (request, response) {
    response.status(200).send({"message": "Data received"});
});

//push to allAnimals
app.post('/addAnimal', function (request, response) {
    writeData(request.body);
    response.status(200).send({"message": "Data received"});
});

app.listen(PORT,  () => console.log('server is running on port 9100'));


// MONGOOSE CONNECTION
dotenv.config(); // mongodb://username:password@host:port/database?options..
mongoose.connect('mongodb+srv://new-animal:zivotinja1234@cluster0.khkyf.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("mongoose connected");
});

// Data to database

app.post('/add-animal', (req, res) => {
    const animal = new Animal({
        animalImage: req.body.animalImage,
        animalName: req.body.animalName,
        animalAge: req.body.animalAge,
        animalSpecies: req.body.animalSpecies,
        animalClass: req.body.animalClass,
        animalFood: req.body.animalFood
    });

    animal.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {{
            console.log(err)
        }})
})

app.get('/', function (request, response) {
    response.send('Hello from server');
});

// Read data from database
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

// Update data from database
app.put('/:id', (req, res) => {
    Animal.find()
        .then((result) => {
            res.send(result);
            console.log(result + "for allanimals")
        })
        .catch((err) => {
            console.log(err + "for allanimals")
        });
});

// Delete data from database
app.delete('/:id', (req, res) => {
    Animal.find()
        .then((result) => {
            res.send(result);
            console.log(result + "for allanimals")
        })
        .catch((err) => {
            console.log(err + "for allanimals")
        });
});



