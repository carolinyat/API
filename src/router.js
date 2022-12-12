const express = require('express'); //importação express
const MovieController = require('./controllers/MovieController'); //importação controller de Movie
const routes = express.Router(); //constante que recebe express.Router(), responsável
//pela abstração de métodos HTTP

//Todas as rotas do Express é composta pelo caminho da rota e por uma função de retorno, 
//no caso o retorno é um método do controller.

routes.get('/movies', MovieController.list );
routes.get('/movies/:id', MovieController.show );
routes.get('/movies', MovieController.create );
routes.get('/movies/id:', MovieController.update );
routes.get('/movies/id:', MovieController.delete );

//Para “get” retornamos uma lista com todos os Movies e só. No segundo “get” passa-se um “:id”, 
//ele será recuperado da url como um parâmetro

module.exports = routes;