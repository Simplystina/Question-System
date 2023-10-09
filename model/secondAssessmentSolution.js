const mongoose = require("mongoose")

// Questions Schema
const secondAssessmentSolutionsSchema = new mongoose.Schema(
     {
      id: mongoose.SchemaTypes.ObjectId,
      userId: {type:String, required: true},
      submissionUrl : {type:String},
       grade: {type:String},
       questionId: {type:String}
    },
     {
        timestamps: true, toJSON: { virtuals: true }
    }

);


module.exports = mongoose.model('secondAssessmentSolutions', secondAssessmentSolutionsSchema)