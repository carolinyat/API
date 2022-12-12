const express = require('express'); //importa o módulo express dentro da constante express
const api = express();
const routes = require('./router'); //chamamos as rotas do arquivo de rotas 

api.use(express.json()); //habilitação do uso de json nas requisições e respostas da API
api.use(routes); //dizendo ao express para usar minhas rotas

api.listen(3001); // ouve (listen) a porta 3001

//nodemon execução: nodemon src/server.js ou 'yarn dev'