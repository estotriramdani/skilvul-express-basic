var jwt = require('jsonwebtoken');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const tokenChecker = (req, res, next) => {
  // validate key
  const authorization = req.headers.authorization;

  if (!authorization?.startsWith('Bearer')) {
    return res.status(403).json({
      message: 'You need to specify the authorization',
    });
  }

  const jwtToken = authorization.split(' ')?.[1];

  jwt.verify(jwtToken, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      return res.status(403).json({
        message: 'Wrong credentials',
      });
    }
    req.credentials = decoded;
    next();
  });
};

module.exports = tokenChecker;
