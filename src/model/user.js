const Sequelize = require('sequelize');
const database = require('../config/db');

const user = database.define('User', 
{
    IDUser: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    EDV:
    {
        type: Sequelize.STRING(10),
        allowNull: false
    },

    Nome: 
    {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    Rua:
    {
        type: Sequelize.STRING(255),
        allowNull: false
    },

    Número: 
    {
        type: Sequelize.INTEGER(6),
        allowNull: false
    },

    Bairro:
    {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    Telefone:
    {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    Email:
    {
        type: Sequelize.STRING(255),
        allowNull: false
    },

    Horario: 
    {
        type:Sequelize.STRING(6),
        allowNull: false
    }

});

module.exports = user;