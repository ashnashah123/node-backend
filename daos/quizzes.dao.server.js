// TODO: maybe populate ('questions')

const quizzesModel = require('../models/quizzes/quizzes.models.server')
const findAllQuizzes = () => quizzesModel.find()
const findQuizById = (qid) => quizzesModel.find({"quizId": qid})
module.exports = { findAllQuizzes, findQuizById }