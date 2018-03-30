const jwt = require('jsonwebtoken'),
  conf = require('./config').app

function verifyToken (req, res, next) {
  var token = req.headers['authorization']
  if (!token) return res.status(403).send({auth: false, message: 'No token provided'})
  jwt.verify(token.substring(7), conf.secret, (err, decoded) => {
    if (err) return res.status(500).send({auth: false, message: 'Failed to authenticate token'})
    req.userID = decoded.id
    next()
  })
}

module.exports = verifyToken
