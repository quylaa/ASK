const Database = require('./db'),
  db = new Database(),
  statements = require('./statements')

module.exports = {
  getAll: () => {
    return db.query(statements.allUsers)
  },
  getOne: id => {
    let data = {}
    return db.query(statements.anUser, [id])
    .then(rows => {
      data.userdata = rows[0]
      return db.query(statements.userQuestions, [id])
    }).then(rows => {
      data.questions = rows
      return db.query(statements.userAnswers, [id])
    }).then(rows => {
      data.answers = rows
      return data
    })
  },
  check: (user, passwd) => {
    return db.query(statements.checkLogin, [user, passwd])
  },
  unique: (user, email) => {
    return db.query(statements.checkUnique, [user, email])
  },
  add: (name, username, password, email) => {
    return db.query(statements.addUser, [name, username, password, email])
  },
  getVotes: id => {
    return db.query(statements.getVotes, [id])
  },
  setVotes: (id, arr) => {
    return db.query(statements.setVotes, [arr, id])
  }
}
