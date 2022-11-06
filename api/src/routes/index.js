const { Router } = require('express');
const videogame = require('./RouteVideogames.js');
const genre = require('./RouteGenre.js');

const router = Router();


router.use('/videogame', videogame);
router.use('/genre', genre)



module.exports = router;
