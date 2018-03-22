Questions = require('../models/questions')
//Users = require('../models/').Users
//Answers = require('../models/').Answers

module.exports = {
  index (req, res) {
    Questions.getAll()
    .then(data => {
      sendResult(res, data.sort((a,b) => {return b.score - a.score}))
    })
  },
  one (req, res) {
    Questions.getOne(req.params.id)
    .then(data => {
      sendResult(res, data[0][0]) // since there's only one result, return only that
    })
  }
}

function sendResult(res, result) {
  res.status(200).json(result)
}
