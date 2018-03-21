const Database = require('./db'),
  db = new Database(),
  statements = require('./statements')

module.exports = {
  getAll: () => {
    return db.query(statements.allAnswers)
  },
  getFor: id => {
    return db.query(statements.someAnswers, [id])
  }
}
