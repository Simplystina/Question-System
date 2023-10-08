var express = require('express');
var router = express.Router();
var {GetQuestions} = require('../controllers/questions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/questions', GetQuestions);

module.exports = router;
