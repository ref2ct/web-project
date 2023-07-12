const sequelize = require('sequelize');
 
//configurações da base de dados
const database = new sequelize('webProject', 'web', 'PasswordPorqueira',
{
    dialect: 'mssql', host:'localhost', port: 53256
});
 
database.sync();
 
module.exports = database;