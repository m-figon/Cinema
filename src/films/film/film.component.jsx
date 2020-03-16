import React from 'react';
import {Component} from 'react';
import "./film.style.css";
import filmData from '../filmsDataBase.json';
function Film(props){
        return(
            <div class="film">
                    <br></br>
                    <h2 key={props.id}>{filmData[props.id].name}</h2>
                    <img src={filmData[props.id].src}></img>
                    <h1 key={props.id}>{filmData[props.id].type}</h1>
                    <h1 key={props.id}>Od lat {filmData[props.id].ageRestrictions}</h1>
                    <h1 key={props.id}>{filmData[props.id].duration}</h1> 
                    <iframe 
                        src={filmData[props.id].trailer}>
                    </iframe>        
              </div>
        )  
    
}


export default Film;