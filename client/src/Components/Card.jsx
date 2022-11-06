import React from 'react';
import { Link } from 'react-router-dom';
import s from './Card.module.css'

export default function Card({id, name, img, rating, genres}){
    return (
        
        <div className={s.divCard}> 
            <Link to={'/detailsGame/' + id}>
             <img src={img} alt="Pic Game" height={'200px'} />
            </Link>
            <h3 className={s.titleGame}>{name}</h3>
            <h5 className={s.rating}>⭐{rating}</h5>
            <h5 className={s.genres}>Genre: {genres.map(e => {
                return e+ ' '
            })}</h5>
        </div>
        
    )
}