const quizzesService = require('../services/quizzes.service.server')
module.exports = function (app) {
   app.get('/api/quizzes', (req, res) =>
       quizzesService.findAllQuizzes()
           .then(allQuizzes => res.send(allQuizzes)))
   app.get('/api/quizzes/:quizId', (req, res) =>
       quizzesService.findQuizById(req.params['quizId'])
           .then(quiz => res.send(quiz)))
}