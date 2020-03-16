import React from 'react';
import {Component} from 'react';
import filmData from './filmsDataBase.json';
import Popup from "../popup/popup.component.jsx";
import Film from './film/film.component.jsx';
function Films(props){
            if(!props.name){
                return(
                    <>
                    {filmData.map((element)=>{
                        return(
                            <>
                            <br></br>
                            <Film id={element.id}></Film>
                            <br></br>
                            </>
                        )
                    })}
                    </>
                )
            }else{
                return(
                    <>
                    {filmData.map((element)=>{
                        if(element.type===props.name){
                            return(
                                <>
                                <br></br>
                                <Film id={element.id}></Film>
                                <br></br>
                                </>
                            )
                        }else{
                            return(null);
                        }
                    })}
                    </>
                )
            }
            
}


export default Films;