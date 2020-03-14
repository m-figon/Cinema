import React from 'react';
import {Component} from 'react';
import filmData from './filmsDataBase.json';
import "./films.style.css";
import Popup from "../popup/popup.component.jsx";
import Film from './film/film.component.jsx';
function Films(props){
            if(!props.name){
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
            }else{
                return(
                    <div class="film-list">
                    {filmData.map((element)=>{
                        if(element.type===props.name){
                            return(
                                <React.Fragment>
                                <br></br>
                                <Film id={element.id}></Film>
                                <br></br>
                                </React.Fragment>
                            )
                        }else{
                            return(null);
                        }
                    })}
                    </div>
                )
            }
            
}


export default Films;