import axios from 'axios'

export function getVideogames(){
    return async function(dispatch){
        try{
            const info = await axios.get('http://localhost:3001/videogame')
            return dispatch({
                type: 'GET_VIDEOGAMES',
                payload: info.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export function getVideogamesName(name){
    return async function(dispatch){
        try{
            const info = await axios.get(`http://localhost:3001/videogame?name=${name}`);
            return dispatch({
                type: 'GET_VIDEOGAMES_NAME',
                payload: info.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export function getGenres(){
    return async function(dispatch){
        try{
            const info = await axios.get('http://localhost:3001/genre');
            return dispatch({
                type: 'GET_GENRES',
                payload: info.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export function getDetails(id){
    return async function(dispatch){
        try{
            const info = await axios.get(`http://localhost:3001/videogame/${id}`);
            return dispatch({
                type: 'GET_DETAILS',
                payload: info.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export function clearDetails(){
    return async function(dispatch){
        try{
            return dispatch({
                type: 'CLEAR_DETAILS'
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export function postVideogames(payload){
    return async function(){
        try{
            const info = axios.post('http://localhost:3001/videogame', payload);
            return info;
        }
        catch(err){
            console.log(err)
        }
    }
}

export function orderByRatingName(payload){
    return{
        type: 'ORDER_RATING/NAME',
        payload,
    }
}

export function videogameFilterByGenre(payload){
    return{
        type: 'FILTER_GENRE',
        payload,
    }
}

export function updatePage(page){
    return(dispatch) => {
        dispatch({
            type: 'UPDATE_PAGE',
            payload: page
        })
    }
}