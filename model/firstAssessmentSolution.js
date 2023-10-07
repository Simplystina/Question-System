const mongoose = require("mongoose")

// Questions Schema
const questionSchema = new mongoose.Schema(
     {
      id: {type: String, required: true},
      userId: {type:String},
      questionIds : [{id:String}],
      result: {type:String},
    },
     {
        timestamps: true, toJSON: { virtuals: true }
    }

);


module.exports = mongoose.model('questions', questionSchema)