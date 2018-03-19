var mysql = require('mysql')
var statements = require('../config/statements')

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'trebek',
  password: 'alex',
  database: 'ask'
})

var query = function (sql) {
  return new Promise((resolve, reject) => {
    conn.query(sql, (err, results, fields) => {
      if (err) return reject(err)
      resolve(results)
    })
  })
}

const db = {
  getUsers: function () {
    query(statements.allUsers)
    .then(data => {
      return data
    })
  },

  getQuestions: function () {
    query(statements.allQuestions)
    .then(data => {
      let res = []
      data.forEach(row => {
        res.push({'asker': row.asker, 'question': row.question, 'id': row.id})
      })
      return res
    })
  }
}

module.exports = db
