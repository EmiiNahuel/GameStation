const initialState ={
    videogames: [],
    allVideogames: [],
    genres: [],
    details: [],
    page: 1
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_VIDEOGAMES':
            return{
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            }
        case 'GET_VIDEOGAMES_NAME':
            return{
                ...state,
                videogames: action.payload
            }
        case 'GET_GENRES':
            return{
                ...state,
                genres: action.payload
            }
        case 'GET_DETAILS':
            return{
                ...state,
                details: action.payload
            }
        case 'CLEAR_DETAILS':
            return{
                ...state,
                details: []
            }
        case 'POST_VIDEOGAMES':
            return{
                ...state
            }
        case 'ORDER_RATING/NAME':
            const orderASC = action.payload === '+'?
            state.videogames.sort(function(a, b){
                if(a.rating > b.rating){
                    return 1;
                }
                if(a.rating < b.rating){
                    return -1
                }
                return 0;
            }) : action.payload === '-'?
            state.videogames.sort(function(a, b){
                if(a.rating > b.rating){
                    return -1;
                }
                if(a.rating < b.rating){
                    return 1;
                }
                return 0;
            }) : action.payload === 'az'?
            state.videogames.sort(function(a, b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1;
                }
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return -1
                }
                return 0;
            }) : action.payload === 'za'?
            state.videogames.sort(function(a, b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1;
                }
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return 1;
                }
                return 0;
            }) : state.videogames

            return {
                ...state,
                videogames: orderASC
            }
        case 'FILTER_GENRE':
            const allVideogames = state.allVideogames;
            const filters = action.payload === 'filterBy' ? allVideogames : allVideogames.filter((e) => e.genres.includes(action.payload) || e.genres.find(e => e.name === action.payload))
            return {
                ...state,
                videogames: filters
            }
        case 'UPDATE_PAGE':
            return{
                ...state,
                page: action.payload
            }
        default: return state;
    }
}
