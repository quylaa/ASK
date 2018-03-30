const Database = require('./db'),
  mysql = require('mysql'),
  db = new Database(),
  statements = require('./statements')

module.exports = {
  getAll: () => {
    return db.query(statements.allQuestions)
  },
  getOne: id => {
    return db.query(statements.anQuestion, [id])
  },
  solo: id => {
    return db.query(statements.oneQuestion, [id])
  },
  addOne: (userid, content) => {
    return db.query(statements.addQuestion, [userid, content])
  },
  removeOne: id => {
    return db.query(statements.removeQuestion, [id])
  },
  modScore: (sign, id) => {
    return db.query(statements.modQScore, [mysql.raw(sign),id])
  }
}
