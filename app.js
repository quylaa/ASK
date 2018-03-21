const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  methodOverride = require('method-override'),
  router = express.Router(),
  path = require('path'),
  questions = require('./server/controllers/questions')
  //answers = require('./server/controllers/answers'),
  //users = require('./server/controllers/users')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride())
app.use(cookieParser())
app.set('port', process.env.PORT || 8001)

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(express.static(__dirname + '/dist'))
app.use(express.static(__dirname + '/static'))

router.get('/questions', questions.index)
//router.get('/answers', answers.index)
//router.get('/users', users.index)

app.use('/api', router)

app.listen(app.get('port'), () => {
  console.log("Server started on port", app.get('port'))
})
