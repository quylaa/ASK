Questions = require('../models/questions')
//Users = require('../models/').Users
//Answers = require('../models/').Answers

module.exports = {
  index (req, res) {
    Questions.getAll()
    .then(data => {
      sendResult(res, data)
    })
      /*let quest = []
      data.forEach(row => {
        quest.push({'asker': row.asker, 'question': row.question, 'id': row.id})
      })
      return quest
    })
    .then(quest => {
      sendResult(res, quest)
    })*/
  }
}

function sendResult(res, result) {
  res.status(200).json(result)
}
