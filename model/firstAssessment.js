const mongoose = require("mongoose")

// First Assessment Schema
const firstAssessmentSchema = new mongoose.Schema(
     {
     id: {type: String, required: true},
     questiofn: {type:String},
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


module.exports = mongoose.model('firstAssessment', firstAssessmentSchema)