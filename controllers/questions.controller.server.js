const questionsService = require('../services/questions.service.server')
module.exports = function(app) {
   app.get('/api/quizzes/:qid/questions', (req, res) =>
       questionsService.findQuestionsForQuiz(req.params['qid'])
           .then(questions => res.json(questions)))
   app.get('/api/questions', (req, res) =>
       questionsService.findAllQuestions()
           .then(allQuestions => res.json(allQuestions)))
   app.get('/api/questions/:qid', (req, res) =>
       questionsService.findQuestionById(req.params['qid'])
           .then(question => res.json(question)))
}

// [
//     {"_id": "123", "title": "Quiz 1", "quizId":123},
//     {"_id": "234", "title": "Quiz 2", "quizId":234},
//     {"_id": "345", "title": "Quiz 3", "quizId":345}
// ]

// [
//     {"_id": "123", "title": "JPA True False", "quizId": 234, "question":
// "JPA stands for Java Persistence API", "correct": "true", "type": "TRUE_FALSE"},
//     {"_id": "234", "title": "JPA Multiple Choice", "quizId": 234, "question":
// "What does JPA stand for?", "correct": "Java Persistence API",
// "type": "MULTIPLE_CHOICE", "choices":
// ["Java Pseudo API", "Java Persistence API", "JSON Persistence API",
// "JavaScript Persistence API"]},
//     {"_id": "345", "title": "JSON True False", "quizId": 234, "question":
// "JSON stands for Java Object Notation", "correct": "false","type": "TRUE_FALSE"},
//     {"_id": "456", "title": "JSON Multiple Choice", "quizId": 345, "question":
// "What does JSON stand for?", "correct": "JavaScript Object Notation",
// "type": "MULTIPLE_CHOICE", "choices": ["JavaScript Object Notation",
// "JavaScript Object Normalization", "Java Object Normalization", "Java Object Notation"]},
//     {"_id": "567", "title": "CSS True False", "quizId": 345, "question":
// "CSS stands for Cascading Style Sheet", "correct": "true", "type": "TRUE_FALSE"},
//     {"_id": "678", "title": "CSS Multiple Choice", "quizId": 123, "question":
// "What does CSS stand for?", "correct": "Cascading Style Sheet", "type":
// "MULTIPLE_CHOICE", "choices": ["Class Style Sheet", "Cascading Screen Style",
// "Cascading Style Sheet", "Cascading Style Screen"]}
// ]
