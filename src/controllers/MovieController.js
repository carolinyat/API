const Movie = require('../models/Movie'); //importação do Model de Movie, temos acesso a alguns 
//métodos que o Sequelize fornece como, findAll, create, update e destroy (CRUD).

module.exports = {
    async list(req, res){
        try {
            const movies = await Movie.findAll()
            return res.json(movies);
        } catch (err) {
            return console.error("Erro na listagem: ", err);
        }
    },
    async show(req, res){
        try {
            const movie = await Movie.findAll({where: {id: req.params.id}});
            return res.json(movie);
        } catch (err) {
            return console.err("Erro na busca: ", err);
        }
    },
    async create(req, res){
        const {title, poster, overview} = req.body;
        try {
            const movie = await Movie.create({title, poster, overview});
            return res.json(movie);
        } catch (error) {
            return console.error('Erro na criação', err);
        }
    },
    async update(req, res){
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        const { title, poster, overview } = req.body;
        const id = req.params.id;
        try {
            await Movie.update({title, poster, overview}, {where: {id: {[Op.eq]: id }}});
            return res.json({msg: `Filme ${title} atualizado com sucesso!`});
        } catch (error) {
            return res.json({msg: `Filme ${title} não foi atualizado`}, err);            
        }
    },
    async delete(req, res){
        try {
            await Movie.destroy({where: {id: req.params.id }});
            return res.json({msg: `Exclusão de item de ID ${req.params.id} feita com sucesso!`});
        } catch (err) {
            return console.err("Erro na exclusão: ", err);
        }
    },
}

//todos os métodos recebem dois parâmetros importantes, o “req“ e o “res”, e é por eles que
// fazemos a comunicação com o “client”, recebendo e enviando informações.