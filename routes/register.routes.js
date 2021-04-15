const app = require('express').Router()
const validation = require('../validators/register.validation')
const registerController = require('../controller/resister.controller');

// MVC
app.get('/',registerController.register);
app.post('/handleSignUp', validation, registerController.handleSignUp);

module.exports = app;