const Database = require('./db'),
  mysql = require('mysql'),
  db = new Database(),
  statements = require('./statements')

module.exports = {
  getAll: () => {
    return db.query(statements.allAnswers)
  },
  getFor: id => {
    return db.query(statements.someAnswers, [id])
  },
  solo: id => {
    return db.query(statements.oneAnswer, [id])
  },
  addOne: (questionid, userid, content) => {
    return db.query(statements.addAnswer, [questionid, userid, content])
  },
  delOne: id => {
    return db.query(statements.removeAnswer, [id])
  },
  modScore: (sign, id) => {
    return db.query(statements.modAScore, [mysql.raw(sign),id])
  }
}
