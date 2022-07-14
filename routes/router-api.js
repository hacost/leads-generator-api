const express = require('express');

const {apiConfig} = require('../config/config');
const leadsRouter = require('./leads-router');

const router = express.Router();

function routerApi(app){
  app.use(apiConfig.apiVersion, router);
  router.use('/leads', leadsRouter);
}

module.exports = routerApi;
