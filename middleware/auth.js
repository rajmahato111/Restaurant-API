const jwt = require('jsonwebtoken');
const config = require('config');

//So every time we hit an endpoint we can fire off this middleware 
//and we just want to check to see if there's a token in the header.
module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
//if there is a token we're going to verify it we're gonna pull out the payload 

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
