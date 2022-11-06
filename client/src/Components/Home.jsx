import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, videogameFilterByGenre, getGenres, orderByRatingName } from '../Actions'
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import s from './Home.module.css'
import Navbar from './Navbar';
import Paginado from './Paginado';
import Card from './Card';

 
export default function Home(){

    const dispatch = useDispatch();
    const allVideogames = useSelector(state => state.videogames);
    const allGenres = useSelector(state => state.genres);

    const [currentPage, setCurrentPage] = useState(1);
    const [videogamesPerPage] = useState(20);
    const [,setOrder] = useState('');
    
    const lastVideogame = currentPage * videogamesPerPage; // 15
    const firstVideogame = lastVideogame - videogamesPerPage; // 0
    const currentVideogames = allVideogames.slice(firstVideogame, lastVideogame);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    function handleFilter(e){
        e.preventDefault()
        dispatch(videogameFilterByGenre(e.target.value))
        setCurrentPage(1)
    }

    function handleOrder(e){
        e.preventDefault()
        dispatch(orderByRatingName(e.target.value))
        setOrder(`${e.target.value}`)
    }

    useEffect(() => {
        dispatch(getVideogames());
        dispatch(getGenres());
    },[dispatch]);


    return (
        <div className={s.divPrincipal}>
            <Navbar />

            <div className={s.divFilters}>
                <select onChange={e => handleOrder(e)} className={s.selectO}>
                    <option value="orderBy" className={s.optOrder}>ORDER BY</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                    <option value="+">Menor Rating</option>
                    <option value="-">Mayor Rating</option>
                </select>
               
                <select onChange={e => handleFilter(e)} className={s.selectG}>
                    <option value="filterBy">FILTER BY</option>
                    {
                        allGenres?.map(g => <option key={g.name} value={g.name}>{g.name}</option>)
                    }
                </select>
            </div>

            
            
            <div className={s.divCards}>
              {  
                currentVideogames.length?
                currentVideogames.length && currentVideogames.map((v,i) => <Card key={i} {...v}/>) :  
                <Spinner type='border' className={s.spinner}>
                    Loading...  
                </Spinner>
              }
            </div>

            <Paginado
            videogamesPerPage={videogamesPerPage}
            allVideogames={allVideogames.length}
            paginado={paginado}
            currentPage={currentPage}
            ></Paginado>
            
        </div>
    )
}