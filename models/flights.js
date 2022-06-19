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

const Flight = mongoose.model('Flight', flightSchema)

export {
    Flight
}