const {Router} = require('express');
const {Videogame, Genre} = require('../db.js');
const { getAllGames, getGamesById } = require('../controllers/functions');
const router = Router();

router.get('/', async(req,res) => {
    try{
        const { name } = req.query;
        let allGames = await getAllGames();
        
        if(name){
            let gameName = allGames.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            console.log(gameName)
            gameName.length ? 
            res.json(gameName):
            res.status(404).json('No se encontro el juego solicitado');
        }
        else{
            res.json(allGames)
        }
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

router.get('/:id', async(req,res) => {
    try{
        const id  = req.params.id
        const allGames = await getGamesById(id);
        console.log(allGames)
        res.json(allGames)
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

router.post('/', async(req,res) => {
    try{
        const {name, description, image, released, rating, platforms, inDb, genres} = req.body;
        if(!name || !description || !rating || !platforms || !genres) {throw 'Faltan datos obligatorios'}
        let newGame = await Videogame.create({
            name,
            description,
            image,
            released,
            rating,
            platforms,
            inDb
        })

        let genreCreate = await Genre.findAll({
            where : {name : genres}
        })
        newGame.addGenre(genreCreate);

        res.json(`Juego ${name} creado exitosamente`)
    }
    catch(err){
        res.status(400).send(err.message);
        console.log(err)
    }
})

module.exports = router;