import React from 'react';
import {Component} from 'react';
import filmData from './filmsDataBase.json';
import "./films.style.css";
import Popup from "../popup/popup.component.jsx";
import Film from './film/film.component.jsx';
function Films(){
    
            return(
                <div class="film-list">
                {filmData.map((element)=>{
                    return(
                        <React.Fragment>
                        <br></br>
                        <Film id={element.id}></Film>
                        <br></br>
                        </React.Fragment>
                    )
                })}
                </div>
            )
}


export default Films;