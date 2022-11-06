import React from 'react';
import s from './Paginado.module.css'

export default function Paginado({videogamesPerPage, allVideogames, paginado, currentPage}){
    const arrVideogames = [];

    const cuenta = allVideogames/videogamesPerPage;

    for(let i=0; i <= Math.floor(cuenta - 1); i++){
        arrVideogames.push(i+1)
    }

    const end = arrVideogames[arrVideogames.length - 1 ];
    const start = arrVideogames[0];
    const prev = currentPage - 1;
    const next = currentPage + 1;

    return(
        <div className={s.divUl}>
            {arrVideogames.length? start !== currentPage && <button onClick={() => paginado(prev)} className={s.btnPrev}>˂Previous</button>: console.log()}
            {arrVideogames.length? <button className={s.btnCurrent}>{currentPage}</button>: console.log()}
            {arrVideogames.length? end !== currentPage && <button onClick={() => paginado(next)} className={s.btnNext}>Next˃</button>: console.log()}
        </div>

    )
}