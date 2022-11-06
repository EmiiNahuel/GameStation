const axios = require('axios');
const {Videogame, Genre} = require('../db.js')

const APIKEY= 'c6d648e59d174175bbc66498e34de6bc'

const getApiGames = async () => {
    try{
        const apiGames = [];
        let urlApi = `https://api.rawg.io/api/games?key=${APIKEY}`;

        //TRAIGO LOS PRIMEROS 120 JUEGOS--
        for(let i = 0 ; i < 6; i++){

            const dataApi = await axios.get(urlApi);
            const apiRequest = await dataApi.data.results
            
            apiRequest.map(g =>  apiGames.push({
                id: g.id,
                name: g.name,
                img: g.background_image,
                released: g.released,
                rating: g.rating,
                platforms: g.platforms.map(p => p.platform.name),
                genres: g.genres.map(el => el.name)
            }))
            //LE ORDENO AL FINAL DEL BUCLE QUE ENTRE AL NEXT DE CADA PAGINA
            urlApi = dataApi.data.next 
        }
        return apiGames;
    }
    catch(err){
        console.log(err)
    }
}

const getGamesById = async (id) =>{
    try{
        if(id.includes('-')){
            const game = await Videogame.findOne({
                where: {
                    id
                },
                include: [{
                    model: Genre,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }]
            })
            return game;
        }
        else{

            const urlApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`);
            const apiRequest = urlApi.data
    
            return [{
                id,
                name: apiRequest.name,
                description: apiRequest.description_raw,
                released: apiRequest.released,
                img: apiRequest.background_image,
                rating: apiRequest.rating,
                platforms: apiRequest.platforms.map(p => p.platform.name),
                genres: apiRequest.genres.map(e => e.name),
                website: apiRequest.website
            }]
        }
    }
    catch(err){
        console.log(err)
    }
}

const getDbGames = async () => {
    try{
        return await Videogame.findAll({
            include:{
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
    }
    catch(err){
        console.log(err)
    }
}

const getAllGames = async () => {
    try{
        // GUARDO EN CONSTANTES LA INFO TRAIDA EN LAS DOS FUNCIONES Y LAS CONCATENO PARA GUARDARLAS EN UNA SOLA CONSTANTE
        const infoGames = await getApiGames();
        const infoDb = await getDbGames();
        const infoFinal = infoGames.concat(infoDb);
        return infoFinal;
    }
    catch(err){
        console.log(err)
    }
}


module.exports = {
    getApiGames,
    getGamesById,
    getDbGames,
    getAllGames
};