import mongoose from "mongoose";

//shortcut 
const Schema = mongoose.Schema

//Create Schema
const flightSchema = new Schema({
    airline : {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport : {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo : {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    } ,
    departs : {
    type: Date,
    defalt: function() {
        const today = new Date()
        const oneYear = today.getFullYear() + 1
        today.setFullYear(oneYear)
            return today
        },
    },
    
}, {
    timestamps: true,
})

//Compile Schema to a model

const Flight = mongoose.model('Flight', flightSchema)

export {
    Flight
}