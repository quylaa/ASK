let Users = require('../models/users'),
  Questions = require('../models/questions'),
  Answers = require('../models/answers'),
  conf = require('../auth/config').app,
  jwt = require('jsonwebtoken')

module.exports = {
  index (req, res) {
    Users.getAll()
    .then(data => {
      sendResult(res, data)
    })
  },
  one (req, res) {
    Users.getOne(req.params.id)
    .then(data => {
      sendResult(res, data)
    })
  },
  check (req, res) {
    Users.check(req.body.username, req.body.password)
    .then(data => {
      if (data.length > 0) {
        var token = jwt.sign({id: data[0].userid}, conf.secret, {expiresIn: 86400})
        Users.getOne(data[0].userid)
        .then(user => {
          sendResult(res, {success: true, token: token, data: user.userdata})
        })
      } else {
        sendResult(res, {success: false})
      }
    })
  },
  add (req, res) {
    Users.unique(req.body.username, req.body.email)
    .then(data => {
      if (data.length > 0) {
        sendResult(res, {success: false, message: 'Error: user or email already used'})
      } else {
        Users.add(req.body.name, req.body.username, req.body.password, req.body.email)
        .then(data => {
          if (data.affectedRows > 0) {
            var token = jwt.sign({id: data.insertId}, conf.secret, {expiresIn: 86400})
            Users.getOne(data.insertId)
            .then(user => {
              sendResult(res, {success: true, token: token, data: user.userdata})
            })
          } else {
            sendResult(res, {success: false, message: 'Error: database error'})
          }
        })
      }
    })
  },
  getVotes (req, res) {
    Users.getVotes(req.params.id)
    .then(data => {
      sendResult(res, JSON.parse(data[0].votes))
    })
  },
  getQVotes (req, res) {
    Users.getVotes(req.params.id)
    .then(data => {
      sendResult(res, JSON.parse(data[0].votes).questions)
    })
  },
  getQVoteOne (req, res) {
    Users.getVotes(req.params.id)
    .then(data => {
      return JSON.parse(data[0].votes).questions.find((el) => {return el.id === Number(req.params.qid)})
    })
    .then(data => {
      sendResult(res, data)
    })
  },
  getAVotes (req, res) {
    Users.getVotes(req.params.id)
    .then(data => {
      sendResult(res, JSON.parse(data[0].votes).answers)
    })
  },
  getAVoteOne (req, res) {
    Users.getVotes(req.params.id)
    .then(data => {
      return JSON.parse(data[0].votes).answers.find((el) => {return el.id === Number(req.params.aid)})
    })
    .then(data => {
      sendResult(res, data)
    })
  },
  setQVotes (req, res) {
    Users.getVotes(req.params.id)
    .then(data => {
      data = JSON.parse(data[0].votes)
      let qv = data.questions.find((o, i) => {
        if (o.id == req.body.id) {
          if (req.body.reset) data.questions.splice(i, 1)
          else {
            data.questions[i] = {id: parseInt(req.body.id), vote: req.body.vote}
            Questions.modScore(req.body.vote, req.body.id)
          }
          return true
        }
      })
      if (!qv) {
        data.questions.push({id: parseInt(req.body.id), vote: req.body.vote})
      }
      return data
    })
    .then(data => {
      return Users.setVotes(req.params.id, JSON.stringify(data))
    })
    .then(() => {
      return Questions.modScore(req.body.vote, req.body.id)
    })
    .then(() => {
      return Questions.solo(req.body.id)
    })
    .then(data => {
      sendResult(res, {score: data[0].score})
    })
  },
  setAVotes (req, res) {
    Users.getVotes(req.params.id)
    .then(data => {
      data = JSON.parse(data[0].votes)
      let av = data.answers.find((o, i) => {
        if (o.id == req.body.id) {
          if (req.body.reset) data.answers.splice(i, 1)
          else {
            data.answers[i] = {id: parseInt(req.body.id), vote: req.body.vote}
            Answers.modScore(req.body.vote, req.body.id)
          }
          return true
        }
      })
      if (!av) {
        data.answers.push({id: parseInt(req.body.id), vote: req.body.vote})
      }
      return data
    })
    .then(data => {
      Users.setVotes(req.params.id, JSON.stringify(data))
    })
    .then(() => {
      Answers.modScore(req.body.vote, req.body.id)
    })
    .then(() => {
      return Answers.solo(req.body.id)
    })
    .then(data => {
      sendResult(res, {score: data[0].score})
    })
  }
}

function sendResult(res, result) {
  res.status(200).json(result)
}
