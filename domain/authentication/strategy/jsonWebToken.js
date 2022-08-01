const {Strategy, ExtractJwt} = require('passport-jwt');
const {jsonWebTokenConfig} = require('../../../config/config');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jsonWebTokenConfig.privateKey
}

const jsonWebTokenStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
})

module.exports = jsonWebTokenStrategy;