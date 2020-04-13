// imports the questions json file (uses like a db)
let questions = require('./questions')
// filters on a json object - uses Array.filter
findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)
module.exports = {
    findQuestionsForQuiz
}