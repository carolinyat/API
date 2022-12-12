const express = require('express'); //importa o módulo express dentro da constante express

// O express será executado na constante app
// app será um objeto de servidor que será usado para fazer várias coisas como por exemplo ligar o servidor
const api = express();

// O primeiro parâmetro que o método get recebe é o endereço
// '/' que é a mesma coisa que localhost:3000
// O segundo parâmetro é uma função que recebe dois parâmetros:
// request -> requisição
// response -> devolve uma resposta para o front-end (todo retorno de uma rota precisa utilizar o response)
// método json -> permite retornar os dados seguindo uma estrutura de JSON
api.get('/', (req, res) => {
    return res.json({message: 'Hello World!!!'}); //res.send
})

// liga o servidor
api.listen(3000); // ouve (listen) a porta 3000

//para executar: node src/server.js
//nodemon execução: nodemon src/server.js ou 'yarn dev'