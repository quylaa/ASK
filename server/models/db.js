const mysql = require('mysql')

class Database {
  constructor() {
    this.conn = mysql.createConnection({
      host: 'localhost',
      user: 'trebek',
      password: 'alex',
      database: 'ask'
    })
  }
  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.conn.query(sql, args, (err, results) => {
        if (err) reject(err)
        resolve(results)
      })
    })
  }
  close() {
    return new Promise((resolve, reject) => {
      this.conn.end(err => {
        if (err) reject(err)
        resolve()
      })
    })
  }
}

module.exports = Database
