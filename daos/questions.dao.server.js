const questionsModel = require('../models/questions/questions.models.server')
const quizzesModel = require('../models/quizzes/quizzes.models.server')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.find(qid)

// const findQuestionsForQuiz = (qzid) => questionsModel.find({"quizId": qzid})
       // .populate(quizzesModel.find({"quizId": qzid})['questions']).then(quiz => quiz.questions)

// const findQuestionsForQuiz = (qzid) => quizzesModel.find({"quizId": qzid})
       // .populate('questions').then(quiz => quiz.questions)

const findQuestionsForQuiz = (qzid) => questionsModel.find({"quizId": qzid})
       .populate('questions').then(quiz => quiz)



module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }