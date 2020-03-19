import React from 'react';
import {Component} from 'react';
import "./film.style.css";
import filmData from '../filmsDataBase.json';
function Film(props){
        return(
            <div class="film">
                    <br></br>
                    <div class="introduction">
                    <h2 key={props.id}>{filmData[props.id].name}</h2><br></br>
                    <img src={filmData[props.id].src}></img>
                    </div>
                    <div class="filmInfo">
                    <h1 key={props.id}>{filmData[props.id].type}</h1><br></br>
                    <h1 key={props.id}>Od lat {filmData[props.id].ageRestrictions}</h1><br></br>
                    <h1 key={props.id}>{filmData[props.id].duration}</h1><br></br>
                    </div>
                    <div class="video">
                    <iframe 
                        src={filmData[props.id].trailer}>
                    </iframe>  
                    </div>
                          
              </div>
        )  
    
}


export default Film;