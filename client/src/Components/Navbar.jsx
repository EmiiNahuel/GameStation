import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getVideogamesName } from '../Actions'
import s from './Navbar.module.css'
import {BiJoystick, BiSearchAlt} from 'react-icons/bi'
import {RiAddCircleFill} from 'react-icons/ri'
import { Link } from 'react-router-dom';

export default function Navbar(){
    const dispatch = useDispatch();
    const [name, setName ] = useState('');

    function handleInput(e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getVideogamesName(name))
    }

    return(
        <nav className={s.navbar}>
            <div className={s.contIcon}>
                <BiJoystick className={s.icon}/>
            </div>

            <div className={s.contSearchBar}>
                <input className={s.inpSearch} onChange={(e) => handleInput(e)} type="search" name="search" placeholder='Search...'/>
                <button type='submit' onClick={(e) => handleSubmit(e)}><BiSearchAlt className={s.iconSearch}/></button> 
            </div>

            <div className={s.contCreate}>
                <Link className={s.linkCreate} to={'/createGame'}>
                 <button className={s.btnCrear}><RiAddCircleFill className={s.iconAdd}/> Add Game</button>
                </Link>
            </div>
        </nav>
    )
}