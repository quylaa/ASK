const Database = require('./db'),
  db = new Database(),
  statements = require('./statements')

module.exports = {
  getAll: () => {
    return db.query(statements.allQuestions)
  },
  getOne: id => {
    return db.query(statements.anQuestion, [id])
  }
}
