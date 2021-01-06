const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if(!token) {
    return res.status(401).json({ message: 'token required' })
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if(err) {
     return res.status(401).json({ message: 'no access' });
    }
    req.decodedJwt = decoded
    next()
  })


};