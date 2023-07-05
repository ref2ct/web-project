// Iniciando Route do Express
const express = require('express');
const route = express.Router();
const deleteUser = require('./src/controllers/delete')
const EditUser = require('./src/controllers/edit')
 
// Importando os Controllers
const home = require('./src/controllers/home');
const map = require('./src/controllers/map'); 
const register = require('./src/controllers/register'); 

// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/map', map.pagMapGet);
route.get('/register', register.pagRegisterGet);
route.post('/edit/search', EditUser.EditUserGet);
route.post('/register', register.userInsert);
route.post('/delete', deleteUser.deleteUser)
route.post('/edit', EditUser.EditUser)
 
module.exports = route;