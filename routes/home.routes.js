const app = require('express').Router()
const auth = require('../middleware/auth')
const homeController = require('../controller/home.controler')
// MVC
app.get('/home', auth,homeController.home );
app.post('/addNote', homeController.addNote);
app.post('/delete', homeController.deleteNote);
app.post('/editNote', homeController.editNote);
app.get('/logout', homeController.logOut);


module.exports = app;