import React from 'react';
import "./film.style.css";
function Film(props) {
    return (
        <div class="film">
            <br></br>
            <div class="introduction">
                <h2>{props.films[props.id].name}</h2><br></br>
                <img alt="" src={props.films[props.id].src}></img>
            </div>
            <div class="filmInfo">
                <h1 key={props.id}>{props.films[props.id].type}</h1><br></br>
                <h1 key={props.id}>Od lat {props.films[props.id].ageRestrictions}</h1><br></br>
                <h1 key={props.id}>{props.films[props.id].duration}</h1><br></br>
            </div>
            <div class="video">
                <iframe
                    title="1" src={props.films[props.id].trailer}>
                </iframe>
            </div>

        </div>
    )

}


export default Film;