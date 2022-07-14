const express = require('express');
const validatorHandler = require('../middleware/validator-handler');
const controller = require('../controllers/leads-controller');
const { createValidator, updateValidator, getValidator } = require('../validators/leads-validator');

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', validatorHandler(getValidator, 'params'), controller.findById);
router.post('/', validatorHandler(createValidator, 'body'), controller.create);
router.patch('/:id', validatorHandler(getValidator, 'params'), validatorHandler(updateValidator, 'body'), controller.update);
router.delete('/:id', validatorHandler(getValidator, 'params'), controller.delete_);

module.exports = router;
