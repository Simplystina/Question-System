const mongoose = require("mongoose")

// Questions Schema
const firstAssessmentSolutionsSchema = new mongoose.Schema(
     {
      id: mongoose.SchemaTypes.ObjectId,
      userId: {type:String, required: true},
       responses : [{id:String, answer:String}],
       grade: {type:Number},
    },
     {
        timestamps: true, toJSON: { virtuals: true }
    }

);


module.exports = mongoose.model('firstAssessmentSolutions', firstAssessmentSolutionsSchema)