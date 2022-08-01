const passport = require('passport')
const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');
const jsonWebTokenStrategy = require('./strategy/jsonWebToken');
const localStrategy = require('./strategy/local');
const helper = require('../../utils/helper-util');
const {jsonWebTokenConfig} = require('../../config/config');
const usersModel = require('../../models/users-model');

passport.use('local',localStrategy);
passport.use('jwt', jsonWebTokenStrategy);
//private
const jwtSignOptions = {
  expiresIn: jsonWebTokenConfig.tokenExpiration,
}

//public
const authentication = {

  async login(email, password) {
    const user = await usersModel.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    
    const isMatch = helper.verifyPassword(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
   let userUpdate = await usersModel.update(user.id, {lastLogin: Date.now()});  
    helper.hidePassword(userUpdate);
    return userUpdate;
  },

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.createAt
    }
    const token = jwt.sign(payload, jsonWebTokenConfig.privateKey, jwtSignOptions);
    return {
      user,
      token
    }
  },

  verifyToken(token) {
    return jwt.verify(token, jsonWebTokenConfig.privateKey);
  }
}

module.exports = authentication;