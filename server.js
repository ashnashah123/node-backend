console.log("hello world");
var express = require('express')
var app = express()
var bodyParser = require('body-parser')


const mongoose = require('mongoose')

var connectionString = 'mongodb://127.0.0.1:27017/test';
if(process.env.MLAB_USERNAME_WEBDEV) {
   var username = process.env.MLAB_USERNAME_WEBDEV;
   var password = process.env.MLAB_PASSWORD_WEBDEV;
   connectionString = 'mongodb://' + username + ':' + password;
   connectionString += '@ds115752.mlab.com:15752/heroku_qkxpm811';
}

mongoose.connect(connectionString,
{ useNewUrlParser: true, useUnifiedTopology: true })

// enable CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//  returns the object as a function in which you pass app
require('./controllers/quizzes.controller.server')(app)
require('./controllers/questions.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)

app.listen(process.env.PORT || 3000)
// app.listen(3000)
