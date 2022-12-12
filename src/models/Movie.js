const Sequelize = require('sequelize'); //importando o sequelize
const sequelize = require('../db.js') //importando a conexão feita

const schema = 'movie';

class Movie extends Sequelize.Model {} //classe que herda de 'Sequelize.Model'
//todos os métodos e atributos
Movie.init({ //init: usado para mapear o modelo com uma tabela no BD
    title: Sequelize.STRING,
    poster: Sequelize.STRING,
    overview: Sequelize.TEXT
}, {sequelize, modelName: 'movie', schema});
//o init recebe 2 parametros: primeiro definimos os atributos do modelo conforme a tabela no banco
//no segundo dizemos a conexão, nome do Modelo e o schema

sequelize.sync();
module.exports = Movie;