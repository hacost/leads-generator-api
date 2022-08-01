const express = require('express');
const passport = require('passport');
const authenticationController = require('../controllers/authentication-controller');

const router = express.Router();
router.post('/login', passport.authenticate('local', { session: false }), authenticationController.signToken);

module.exports = router;