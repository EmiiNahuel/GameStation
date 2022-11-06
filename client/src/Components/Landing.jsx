import React from 'react';
import {Link} from 'react-router-dom';
import s from './Landing.module.css'

export default function Landing(){
    return(
        <div className={s.divPrincipal}>
            
            <label className={s.title}>GAME STATION</label>
            <Link to={'/home'}>
              <button className={s.btnStart}>Ingresar</button>
            </Link>

        </div>
    )
}