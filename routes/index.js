var express = require('express');
var router = express.Router();
const assessmentController = require("../controllers/questions")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/questions', assessmentController.GetQuestions);


router.post('/submit-first-assessment', assessmentController.submitFirstAssessment)
router.post('/submit-second-assessment', assessmentController.submitSecondAssessment)
module.exports = router;
