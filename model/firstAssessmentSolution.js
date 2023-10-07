const mongoose = require("mongoose")

// Questions Schema
const firstAssessmentSolutionsSchema = new mongoose.Schema(
     {
      id: mongoose.SchemaTypes.ObjectId,
      userId: {type:String},
      questionIds : [{id:String}],
      result: {type:String},
    },
     {
        timestamps: true, toJSON: { virtuals: true }
    }

);


module.exports = mongoose.model('firstAssessmentSolutions', firstAssessmentSolutionsSchema)