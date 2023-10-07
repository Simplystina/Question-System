const firstAssessmentQuestionModel = require("../model/firstAssessmentQuestions")
const firstAssessmentSolutionModel = require("../model/firstAssessmentSolution")
const secondAssessmentSolution = require("../model/secondAssessmentSolution")
const secondAssessmentQuestion = require("../model/secondAssessmentQuestion")

 //const userId =  '65216ad2354d9ccf2cd0aeea'
 const userId =  '65216ad2354d9ccf2cd0aeeb'

exports.submitFirstAssessment = async (req,res)=>{

    const response = req.body.results.map(result =>{
        return { _id: result.id, answer: result.ans };
   })
    
   try {
      const result = await firstAssessmentQuestionModel.find({ $or: response })
      console.log(response,"results", result.length)
     const score = result.length * 5
      const checkUser = await firstAssessmentSolutionModel.find({userId})

        if(checkUser.length>0){
        console.log(checkUser, "checkUser")
        checkUser[0].grade = result.length * 5
        checkUser[0].save()
        return res.status(200).json({success:true, grade: result.length * 5, message:"You have submitted your test successfully"})
      }


      //check if user passed and assign them a second assessment
      if(score> 10){
        const getSecondAssessment = await secondAssessmentQuestion.aggregate(
        [ { $sample: { size: 1 } } ]
        )
        console.log(getSecondAssessment,"getSecondAssessment")
        const assignedSecondAssessment = await secondAssessmentSolution.create({
         userId: userId,
         questionId: getSecondAssessment[0]._id
        })
        console.log(assignedSecondAssessment,"assigned question")
      }
     

      const gradeUpdate = await firstAssessmentSolutionModel.create({
        userId: userId,
        responses:response,
        grade: result.length * 5
      })
       return res.status(200).json({success:true, grade: result.length * 5, message:"You have submitted your test successfully"})
   } catch (error) {
     console.log(error,"error")
   }
}


exports.submitSecondAssessment = async (req,res)=>{
    const {id, url} = req.body
  try {
     const getSecondAssessment = await secondAssessmentSolution.find({userId: userId, questionId: id})
     console.log(getSecondAssessment,"second assessment")
     if(getSecondAssessment.length>0){
        getSecondAssessment[0].submissionUrl = url
        getSecondAssessment[0].save()
    return res.status(200).json({success:true, message:"You have submitted your second Assessment successfully"})
     }
    return res.status(200).json({success:false, message:"You have not passed the first assessment"})
  } catch (error) {
    console.log(error,"error")
  }
}