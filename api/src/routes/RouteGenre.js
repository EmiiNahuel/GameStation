const { Router }= require('express');
const express = require('express')
const axios = require('axios')
const {Genre} = require('../db.js');
const e = require('express');
const router = Router();

router.use(express.json())

const APIKEY = 'c6d648e59d174175bbc66498e34de6bc'

const url = `https://api.rawg.io/api/genres?key=${APIKEY}`

router.get("/", async (req, res) => {
    try{
        const dbGenres = await Genre.findAll();
        
        if(dbGenres.length){
            
            return res.json(dbGenres)
        }
        else{
            const dataGenre = await axios.get(url);
            const requestGenre = dataGenre.data.results
            const subRequest = requestGenre.map(e => {return{
                id: e.id,
                name: e.name
            }})
            const myGenres = await Genre.bulkCreate(subRequest)
            return res.json(subRequest)
        }
        
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

module.exports = router