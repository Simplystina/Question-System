const mongoose = require('mongoose');
const firstAssesmentQuestions = require('../model/firstAssessmentQuestions');

exports.GetQuestions = async (req, res) => {
    try {
        const questions = await firstAssesmentQuestions.aggregate([
            {$sample: {size: 3}}
        ]).exec();
        const shuffledQuestions = shuffleArray(questions);
        res.json(shuffledQuestions);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

// Function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

