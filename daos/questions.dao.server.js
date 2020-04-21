const questionsModel = require('../models/questions/questions.models.server')
const quizzesModel = require('../models/quizzes/quizzes.models.server')

var ObjectId = require('mongodb').ObjectID

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(new ObjectId(qid))
const findQuestionsForQuiz = (qzid) => quizzesModel.findById(new ObjectId(qzid))
       .populate('questions').then(quiz => quiz.questions)

module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }