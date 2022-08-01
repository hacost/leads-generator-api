const express = require('express');
const passport = require('passport');
const {apiConfig} = require('../config/config');
const leadsRouter = require('./leads-router');
const userRouter = require('./users-router');
const authenticationRouter = require('./authentication-router');

const router = express.Router();

function routerApi(app){
  app.use(apiConfig.apiVersion, router);
  router.use('/leads', passport.authenticate('jwt', { session: false }), leadsRouter);
  router.use('/users', passport.authenticate('jwt', { session: false }), userRouter);
  router.use('/authenticator', authenticationRouter);
}

module.exports = routerApi;
