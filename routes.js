// Iniciando Route do Express
const express = require('express');
const route = express.Router();
const deleteUser = require('./src/controllers/delete')
 
// Importando os Controllers
const home = require('./src/controllers/home');
const map = require('./src/controllers/map'); 
const register = require('./src/controllers/register'); 

// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/map', map.pagMapGet);
route.get('/register', register.pagRegisterGet);
route.post('/register', register.userInsert);
route.post('/delete', deleteUser.deleteUser)
 
module.exports = route;