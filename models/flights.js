import mongoose from "mongoose";

//shortcut 
const Schema = mongoose.Schema

//Create Schema
const flightSchema = new Schema({
    airline : String,
    airport : String,
    flightNo : Number,
    departs : Date,
})

//Compile Schema to a model

const  Movie = mongoose.model('Movie', movieSchema)

export {
    Movie
}