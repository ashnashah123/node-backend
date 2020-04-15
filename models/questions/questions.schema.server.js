const mongoose = require('mongoose')
const questionsSchema = mongoose.Schema({
   title: String,
   quizId: Number, 
   question: String,
   correct: String,
   type: {type: String, enum: ['TRUE_FALSE', 'MULTIPLE_CHOICE', 'ESSAY']},
   choices: [String]
}, {collection: 'questions'})
module.exports = questionsSchema