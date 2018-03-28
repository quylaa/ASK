const Database = require('./db'),
  db = new Database(),
  statements = require('./statements')

module.exports = {
  getAll: () => {
    return db.query(statements.allUsers)
  },
  getOne: id => {
    return db.query(statements.anUser, [id])
  },
  check: (user, passwd) => {
    return db.query(statements.checkLogin, [user, passwd])
  },
  add: (name, username, password, email) => {
    return db.query(statements.addUser, [name, username, password, email])
  },
  getVotes: id => {
    return db.query(statements.getVotes, [id])
  },
  setQuestionVotes: (id, arr) => {
    return db.query(statements.setQuestionVotes, [arr, id])
  },
  setAnswerVotes: (id, arr) => {
    return db.query(statements.setAnswerVotes, [arr, id])
  },
  getQuestionVotes: id => {
    return db.query(statements.getQuestionVotes, [id])
  },
  getAnswerVotes: id => {
    return db.query(statements.getAnswerVotes, [id])
  }
}
