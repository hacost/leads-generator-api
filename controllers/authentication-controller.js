const authentication = require('../domain/authentication/main');

const signToken = async (req, res, next) => {
  try {
    console.log(req.user);
    res.json(authentication.signToken(req.user));
  } catch (error) {
    next(error);
  }
};

module.exports = {signToken};
