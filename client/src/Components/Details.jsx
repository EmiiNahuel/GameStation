import React, {useEffect} from 'react';
import { getDetails, clearDetails } from '../Actions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import {BiJoystick, BiHomeAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import s from './Details.module.css'

export default function Details(props){

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetails(id))
        return () => {
            dispatch(clearDetails())
        }
    }, [dispatch, id])

    const myDetails = useSelector((state) => state.details);

    return(
        <div className={s.divDetails}>
            
            {
                myDetails.length ?
                <div className={s.cardDetails}>
                    
                    <img src={myDetails[0].img} alt="pic game"/>
                    <h3>{myDetails[0].name}</h3>
                    <p className={s.ratingp}>Rating: {myDetails[0].rating}</p>      
                    <p className={s.releasep}>Release Date: {myDetails[0].released}</p>
                    <p className={s.genresp}>Genres: {myDetails[0].genres.join(' | ') }</p>
                    <p className={s.platformsp}>Platforms: {myDetails[0].platforms.join(' | ')}</p>
                    <p className={s.descriptiontitle}>Description:</p>
                    <p className={s.descriptioni}>{myDetails[0].description}</p>
                    <div className={s.divBtns}>
                      <Link to={'/home'}><button className={s.btnHome}><BiHomeAlt className={s.iconH}/></button></Link>
                      <a href={myDetails[0].website}><button className={s.btnWebsite}><BiJoystick className={s.iconW}/> Play The Game</button></a>
                    </div>
                </div>:
                <Spinner type='border' className={s.spinner2}>
                   Loading...  
                </Spinner>
            }
        </div>
    )
}