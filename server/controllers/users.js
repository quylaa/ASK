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
          sendResult(res, {success: true, token: token, data: user[0]})
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
  }
}

function sendResult(res, result) {
  res.status(200).json(result)
}
