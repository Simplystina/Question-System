const mongoose = require('mongoose');
const firstAssessmentQuestion = require('./model/firstAssessmentQuestions');
const secondAssessmentQuestion = require("./model/secondAssessmentQuestion")


const dataToSeed = [
  { question: 'Who created you?', optionA: 'god' , optionB: 'mary', optionC: 'angels', optionD: 'saints', answer: 'god'},
    { question: 'Who loves you most?', optionA: 'god' , optionB: 'mary', optionC: 'angels', optionD: 'saints', answer: 'god'},
     { question: 'Who is the king of the world?', optionA: 'god' , optionB: 'mary', optionC: 'angels', optionD: 'saints', answer: 'god'},
      { question: 'Who is the first person in the trinity?', optionA: 'god' , optionB: 'mary', optionC: 'angels', optionD: 'saints', answer: 'god'},
       { question: 'Who makes you happy the most?', optionA: 'god' , optionB: 'mary', optionC: 'angels', optionD: 'saints', answer: 'god'},

];

const secondAssessmentQues = [
    {question: "Build an interest calculator"},
    {question: "Build a food app calculator"},
    {question: "Build an Admin Dashboard"},
    {question: "Build a Loan Web App"}
]
async function seedData() {
  try {
    await firstAssessmentQuestion.insertMany(dataToSeed);
    
    await secondAssessmentQuestion.insertMany(secondAssessmentQues)

    console.log('Data seeded successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
   
  }
}

module.exports = {seedData}

