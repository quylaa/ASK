Answers = require('../models/answers')

module.exports = {
  index (req, res) {
    Answers.getAll()
    .then(data => {
      sendResult(res, data)
    })
  },
  individual (req, res) {
    Answers.getFor(req.params.id)
    .then(data => {
      sendResult(res, data)
    })
  }
}

function sendResult(res, result) {
  res.status(200).json(result)
}
