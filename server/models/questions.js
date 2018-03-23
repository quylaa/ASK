const Database = require('./db'),
  db = new Database(),
  statements = require('./statements')

module.exports = {
  getAll: () => {
    return db.query(statements.allQuestions)
  },
  getOne: id => {
    return db.query(statements.anQuestion, [id])
  },
  addOne: (userid, content) => {
    return db.query(statements.addQuestion, [userid, content])
  },
  removeOne: id => {
    return db.query(statements.removeQuestion, [id])
  }
}
