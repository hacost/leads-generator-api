const Strategy = require('passport-local').Strategy;
const authentication = require('../main');

const optionsStrategy = {
  usernameField: 'email',
  passwordField: 'password'
};

const localStrategy = new Strategy(
  optionsStrategy, 
  async (email, password, done) => {
  try {
    done(null, await authentication.login(email, password))
  } catch (error) {
    done(error, false)
  }
});

module.exports = localStrategy;