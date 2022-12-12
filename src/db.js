const Sequelize = require('sequelize'); //importa o sequelize, para trabalhar com BDs relacionais
const sequelize = new Sequelize('movies', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
}); //criação do objeto sequelize com infos da conexão

module.exports = sequelize; //exportação do objeto criado para utilização