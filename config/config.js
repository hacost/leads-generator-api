require('dotenv').config();

const config = {
  environment: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
}

const dataBaseConfig = {
  dataBaseUrl: process.env.DATABASE_URL,
}

const apiConfig = {
  apiPort: process.env.API_PORT || 3000,
  apiVersion: process.env.API_VERSION,
  apiKey: process.env.API_KEY,
}

const jsonWebTokenConfig = {
  privateKey: process.env.PRIVATE_KEY,
  tokenExpiration: process.env.TOKEN_EXPIRATION,
}

const emailConfig = {
  emailFrom: process.env.EMAIL_FROM,
  fromName: process.env.FROM_NAME,
  mailerSendApiKey: process.env.MAILER_SEND_API_KEY,
  sendGridApiKey: process.env.SENDGRID_API_KEY,
  emailStrategy: process.env.EMAIL_STRATEGY
}

module.exports = {config, dataBaseConfig, apiConfig, jsonWebTokenConfig, emailConfig};
