// Iniciando Route do Express
const express = require('express');
const route = express.Router();
 
// Importando os Controllers
const home = require('./src/controllers/home');
const map = require('./src/controllers/map'); 
const register = require('./src/controllers/register'); 
const deleteUser = require('./src/controllers/delete')
const editUser = require('./src/controllers/edit')

// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/map', map.pagMapGet);
route.get('/register', register.pagRegisterGet);
route.post('/register', register.userInsert);

route.post('/delete', deleteUser.deleteUser);
route.post('/edit/search', editUser.editUserGet);
route.post('/edit', editUser.editUser);
 
module.exports = route; 