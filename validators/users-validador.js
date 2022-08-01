const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const isActive = Joi.boolean();
const lastLogin = Joi.date();


const createValidator = Joi.object({
  email: email.required(),
  password: password.required()
});

const updateValidator = Joi.object({
  email: email,
  password: password,
  isActive: isActive,
  lastLogin: lastLogin,
});

const getValidator = Joi.object({
  id: id.required(),
});


module.exports = {createValidator, updateValidator, getValidator}; 