const mongoose = require("mongoose")

// Questions Schema
const questionSchema = new mongoose.Schema(
     {
     id: {type: String, required: true},
     question: {type:String},
     optionA : {type:String},
     optionB: {type:String},
     optionC : {type:String},
     optionD : {type:String},
     answer: {type:string},
    },
     {
        timestamps: true, toJSON: { virtuals: true } 
    }

);


module.exports = mongoose.model('questions', questionSchema)