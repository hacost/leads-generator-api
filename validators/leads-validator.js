const Joi = require('joi');

const id = Joi.number().integer();
const businessName = Joi.string();
const url = Joi.string();
const fanCount = Joi.number().integer();
const source = Joi.string();

const createValidator = Joi.object({
  businessName: businessName.required(),
  url: url.required(),
  fanCount: fanCount.required(),
  source: source.required()
});

const updateValidator = Joi.object({
  businessName: businessName,
  url: url,
  fanCount: fanCount,
  source: source,
});

const getValidator = Joi.object({
  id: id.required(),
});


module.exports = {createValidator, updateValidator, getValidator}; 