const mongoose = require("mongoose")

// First Assessment Schema
const secondAssessmentQuestionsSchema = new mongoose.Schema(
     {
     id: mongoose.SchemaTypes.ObjectId,
     question: {type:String, required:true},
     figmaLink: {type:String},
     apiUrl: {type:String}
    },
     {
        timestamps: true, toJSON: { virtuals: true }
    }

);


module.exports = mongoose.model('secondAssessmentQuestions', secondAssessmentQuestionsSchema)