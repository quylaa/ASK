Answers = require('../models/answers')
Questions = require('../models/questions')

module.exports = {
  index (req, res) {
    Answers.getAll()
    .then(data => {
      sendResult(res, data)
    })
  },
  individual (req, res) {
    let data = {}
    Answers.getFor(req.params.id)
    .then(results => {
      data.ans = results[0] // return only the array of results
      Questions.getOne(req.params.id)
      .then(results => {
        data.que = results[0][0] // get only the question
        sendResult(res, data)
      })
    })
  }
}

function sendResult(res, result) {
  res.status(200).json(result)
}
