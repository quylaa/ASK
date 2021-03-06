const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  methodOverride = require('method-override'),
  router = express.Router(),
  path = require('path'),
  Verify = require('./server/auth/verify'),
  questions = require('./server/controllers/questions')
  answers = require('./server/controllers/answers'),
  users = require('./server/controllers/users')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride())
app.use(cookieParser())
app.set('port', process.env.APIPORT || 80)

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(express.static(__dirname + '/dist'))
app.use(express.static(__dirname + '/static'))

router.get('/questions', questions.index)
router.get('/questions/:id', questions.one)
router.post('/questions/add', Verify, questions.add)
router.get('/questions/del/:id', Verify, questions.del)

router.get('/answers', answers.index)
router.get('/answers/:id', answers.individual)
router.post('/answers/add', Verify, answers.add)
router.get('/answers/del/:id', Verify, answers.del)

router.get('/users', users.index)
router.get('/users/:id', users.one)
router.post('/users/add', users.add)
router.post('/users/login', users.check)
router.get('/users/:id/votes', users.getVotes)
router.get('/users/:id/votes/q', users.getQVotes)
router.get('/users/:id/votes/q/:qid', users.getQVoteOne)
router.get('/users/:id/votes/a', users.getAVotes)
router.get('/users/:id/votes/a/:aid', users.getAVoteOne)
router.put('/users/:id/votes/q', Verify, users.setQVotes)
router.put('/users/:id/votes/a', Verify, users.setAVotes)

app.use('/api', router)

app.listen(app.get('port'), () => {
  console.log("Server started on port", app.get('port'))
})
