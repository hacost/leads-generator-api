const { dataBaseConfig } = require('../config/config');
module.exports = {
  development: {
    url: dataBaseConfig.dataBaseUrl,
    dialect: 'postgres'
  },
  test: {
    url: dataBaseConfig.dataBaseUrl,
    dialect: 'postgres'
  },
  production: {
    url: dataBaseConfig.dataBaseUrl,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
   }
  } 
}