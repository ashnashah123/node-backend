const questionsService = require('../services/questions.service.server')
module.exports = function(app) {
   app.get('/api/quizzes/:qid/questions', (req, res) =>
       questionsService.findQuestionsForQuiz(req.params['qid'])
           .then(questions => res.send(questions)))
   app.get('/api/questions', (req, res) =>
       questionsService.findAllQuestions()
           .then(allQuestions => res.send(allQuestions)))
   app.get('/api/questions/:qid', (req, res) =>
       questionsService.findQuestionById(req.params['qid'])
           .then(question => res.send(question)))
}

// [
//     {"title": "Quiz 1"},
//     {"title": "Quiz 2"},
//     {"title": "Quiz 3"}
// ]

// [
//     {"title": "JPA True False", "question":
// "JPA stands for Java Persistence API", "correct": "true", "type": "TRUE_FALSE"},
//     {"title": "JPA Multiple Choice", "question":
// "What does JPA stand for?", "correct": "Java Persistence API",
// "type": "MULTIPLE_CHOICE", "choices":
// ["Java Pseudo API", "Java Persistence API", "JSON Persistence API",
// "JavaScript Persistence API"]},
//     {"title": "JSON True False", "question":
// "JSON stands for Java Object Notation", "correct": "false","type": "TRUE_FALSE"},
//     {"title": "JSON Multiple Choice", "question":
// "What does JSON stand for?", "correct": "JavaScript Object Notation",
// "type": "MULTIPLE_CHOICE", "choices": ["JavaScript Object Notation",
// "JavaScript Object Normalization", "Java Object Normalization", "Java Object Notation"]},
//     {"title": "CSS True False", "question":
// "CSS stands for Cascading Style Sheet", "correct": "true", "type": "TRUE_FALSE"},
//     {"title": "CSS Multiple Choice", "question":
// "What does CSS stand for?", "correct": "Cascading Style Sheet", "type":
// "MULTIPLE_CHOICE", "choices": ["Class Style Sheet", "Cascading Screen Style",
// "Cascading Style Sheet", "Cascading Style Screen"]}
// ]