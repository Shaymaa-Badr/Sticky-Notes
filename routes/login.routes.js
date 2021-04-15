const app = require('express').Router()
const loginController = require('../controller/login.controller')
// MVC
app.get('/login',loginController.login);

app.post('/handleSignin',loginController.handleSignin);
module.exports = app;