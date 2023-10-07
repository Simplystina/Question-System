const mongoose = require('mongoose');
const firstAssessmentQuestion = require('./model/firstAssessmentQuestions');



const dataToSeed = [
  { question: 'Who created you?', optionA: 'god' , optionB: 'mary', optionC: 'angels', optionD: 'saints', answer: 'god'},
    { question: 'Who loves you most?', optionA: 'god' , optionB: 'mary', optionC: 'angels', optionD: 'saints', answer: 'god'},
     { question: 'Who is the king of the world?', optionA: 'god' , optionB: 'mary', optionC: 'angels', optionD: 'saints', answer: 'go'},
      { question: 'Who is the first person in the trinity?', optionA: 'god' , optionB: 'mary', optionC: 'angels', optionD: 'saints', answer: 'go'},
       { question: 'Who makes you happy the most?', optionA: 'god' , optionB: 'mary', optionC: 'angels', optionD: 'saints', answer: 'go'},
  // Add more data as needed
];

async function seedData() {
  try {
    await firstAssessmentQuestion.insertMany(dataToSeed);
    console.log('Data seeded successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
   
  }
}

module.exports = {seedData}

