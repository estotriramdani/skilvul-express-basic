const KEY = 'this_is_secret';

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const tokenChecker = (req, res, next) => {
  // validate key
  const clientKey = req.headers.clientkey;

  if (KEY !== clientKey) {
    res.status(403).json({
      status: 403,
      message: 'Forbidden',
    });
    return;
  }

  req.username = 'esto';
  next();
};

module.exports = tokenChecker;
