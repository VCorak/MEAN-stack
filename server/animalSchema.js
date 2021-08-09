const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema that corresponds with Animal class
const animalSchema  = new Schema({
    image: String,
    name: String,
    age: String,
    species: String,
    class: String,
    food:  String
})

//Append animalSchema to Animal model
const Animal = mongoose.model("Animal", animalSchema)
module.exports = Animal;