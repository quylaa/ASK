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
  }
}
