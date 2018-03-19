const Database = require('./db'),
  db = new Database(),
  statements = require('./statements')

module.exports = {
  getAll: function() {
    return db.query(statements.allQuestions)
  }
}
