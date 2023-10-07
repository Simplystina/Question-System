const mongoose = require("mongoose")

// First Assessment Schema
const firstAssessmentQuestionsSchema = new mongoose.Schema(
     {
     id: mongoose.SchemaTypes.ObjectId,
     question: {type:String},
     optionA : {type:String},
     optionB: {type:String},
     optionC : {type:String},
     optionD : {type:String},
     answer: {type:String},
    },
     {
        timestamps: true, toJSON: { virtuals: true } 
    }

);


module.exports = mongoose.model('firstAssessmentQuestions', firstAssessmentQuestionsSchema)