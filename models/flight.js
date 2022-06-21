import mongoose from "mongoose";

//shortcut 
const Schema = mongoose.Schema

//Create Schema
const flightSchema = new Schema({
<<<<<<< HEAD
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
=======
    airline : String,
    airport : String,
    flightNo : {
        type: Number,
        required: true
    } ,
    departs : Date,
>>>>>>> de0c23941a95f5fd74e4ab7b875bad7c68335299
    
}, {
    timestamps: true,
})

//Compile Schema to a model

const Flight = mongoose.model('Flight', flightSchema)

export {
    Flight
}