let Users = require('../models/users'),
  conf = require('../../config/index').app,
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
      if (data[0].userid) {
        var token = jwt.sign({id: data.userid}, conf.secret, {expiresIn: 86400})
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
    Users.add(req.body.name, req.body.username, req.body.password, req.body.email)
    .then(data => {
      if (data.affectedRows > 0) {
        sendResult(res, {"success": true})
      } else {
        sendResult(res, {"success": false})
      }
    })
  },
  getVotes (req, res) {
    Users.getVotes(req.params.id)
    .then(data => {
      sendResult(res, JSON.parse(data[0].v))
    })
  },
  getQVotes (req, res) {
    Users.getQuestionVotes(req.params.id)
    .then(data => {
      sendResult(res, JSON.parse(data[0].questionVotes))
    })
  },
  getAVotes (req, res) {
    Users.getAnswerVotes(req.params.id)
    .then(data => {
      sendResult(res, JSON.parse(data[0].answerVotes))
    })
  },
  setQVotes (req, res) {
    Users.getQuestionVotes(req.params.id)
    .then(data => {
      data = JSON.parse(data[0].questionVotes)
      let qv = data.find((o, i) => {
        if (o.id == req.body.questionid) {
          data[i] = {id: parseInt(req.body.questionid), vote: req.body.vote}
          return true
        }
      })
      if (!qv) {
        data.push({id: parseInt(req.body.questionid), vote: req.body.vote})
      }
      return data
    })
    .then(data => {
      console.log(JSON.stringify(data))
      Users.setQuestionVotes(req.params.id, JSON.stringify(data))
      .then(result => {
        sendResult(res, {"success": true})
      })
    })
  },
  setAVotes (req, res) {
    Users.getAnswerVotes(req.params.id)
    .then(data => {
      data = JSON.parse(data[0].answerVotes)
      let av = data.find((o, i) => {
        if (o.id == req.body.answerid) {
          data[i] = {id: parseInt(req.body.answerid), vote: req.body.vote}
          return true
        }
      })
      if (!av) {
        data.push({id: parseInt(req.body.answerid), vote: req.body.vote})
      }
      return data
    })
    .then(data => {
      console.log(JSON.stringify(data))
      Users.setAnswerVotes(req.params.id, JSON.stringify(data))
      .then(result => {
        sendResult(res, {"success": true})
      })
    })
  },

}

function sendResult(res, result) {
  res.status(200).json(result)
}
