import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres,} from '../Actions'
import { useForm } from 'react-hook-form'
import s from './CreateGame.module.css'
import { CloseButton } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function CreateGame(){

  const dispatch = useDispatch();
  const genres = useSelector(state => state.genres);
  const myPlatforms = ['PC', 'Linux', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4', 'PlayStation 5', 'PSVita', 'Xbox', 'Xbox 360', 'Xbox One', 'Xbox Series S/X','macOS', 'Nintendo Switch', 'Android', 'IOS']

  const [input, setInput] = useState({
    name:'', urlImg:'', date:'', rating: '', genres: [], platforms: [], description: ''
  })

  useEffect(() => {
    dispatch(getGenres())
  },[dispatch])

    return(
        <div className={s.divMain}>
            <div className={s.divCont}>
              <div className={s.divInputs}>
                  <form className={s.divOne}>
                    <label className={s.lblName}>Name *</label>
                    <input type="text" name='name' className={s.inpName} placeholder='Enter game title'/>
                    <label className={s.lblImagen}>Imagen</label>
                    <input type="text" name='urlImg' className={s.inpImagen} placeholder='Enter the url'/>

                    <div className={s.genrePlatforms}>
                      <div className={s.contGenre}>
                       <label className={s.lblGenres}>Genres *</label>
                       <select name="genres" className={s.selectGenre}>
                       <option></option>
                         {
                           genres.map(g => (<option key={g.name} value={g.name}>{g.name}</option>))
                         }
                       </select>
                      </div>

                      <div className={s.contPlatforms}> 
                        <label className={s.lblPlatforms}>Platforms *</label>
                        <select className={s.selectPlatforms} name="platforms">
                          <option></option>
                          {
                            myPlatforms?.map(v => (<option key={v} value={v}>{v}</option>))
                          }
                        </select>
                      </div>
                    </div>

                    <div className={s.releaseDate}>
                      <div className={s.contDate}>
                       <label className={s.lblDate}>Release Date *</label>
                       <input type='date' name='date' className={s.inpDate} placeholder='Enter Date'/>
                      </div>

                      <div className={s.contRating}> 
                        <label className={s.lblRating}>Rating *</label>
                        <select className={s.selectRating} name="rating">
                          <option value=""></option>
                          <option value="">⭐1</option>
                          <option value="">⭐2</option>
                          <option value="">⭐3</option>
                          <option value="">⭐4</option>
                          <option value="">⭐5</option>
                        </select>
                      </div>
                    </div>


                    <div className={s.contDescription}>
                      <label className={s.lblDescription}>Description</label>
                      <textarea placeholder='Enter the Description' className={s.texta} cols="30" rows="5"></textarea>
                    </div>

                      <button className={s.btnCreate}>Create Videogame</button>
                  </form>
                  <div className={s.divTwo}>
                    <Link to={'/home'}>
                     <CloseButton className={s.closeBtn} variant='white'/>
                    </Link>
                  </div>
              </div>
            </div>
            
        </div>
    )
}