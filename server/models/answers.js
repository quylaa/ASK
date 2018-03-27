const Database = require('./db'),
  db = new Database(),
  statements = require('./statements')

module.exports = {
  getAll: () => {
    return db.query(statements.allAnswers)
  },
  getFor: id => {
    return db.query(statements.someAnswers, [id])
  },
  addOne: (questionid, userid, content) => {
    return db.query(statements.addAnswer, [questionid, userid, content])
  },
  delOne: id => {
    return db.query(statements.removeAnswer, [id])
  }
}
