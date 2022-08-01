const { Sequelize } = require('sequelize');
const {dataBaseConfig, config} = require('./config');
const modelsConfig = require('./models-config');

const options = {
  dialect: 'postgres',
  logging: false
}

if (config.isProduction) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}
const sequelize = new Sequelize(dataBaseConfig.dataBaseUrl, options); 
modelsConfig(sequelize);

module.exports = sequelize;