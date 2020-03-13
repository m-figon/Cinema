import React from 'react';
import {Component} from 'react';
import './informationBar.style.css';
import Form from './form/form.component';
import cinemaInfo from "./cinemaInformation.json";
class InformationBar extends Component{
constructor(){
    super();
    this.state={
        city: "",
        id: 20
    };
    this.cityUpdate = this.cityUpdate.bind(this);
}
cityUpdate(event){
    var num=0;
    if(event.target.value==="gdansk"){
        num=0;
    }else if(event.target.value==="warszawa"){
        num=1;
    }else if(event.target.value==="krakow"){
        num=2;
    }else if(event.target.value==="wroclaw"){
        num=3;
    }
    this.setState({
        city: event.target.value,
        id: num
    })
}
render(){
    if(this.state.city===''){
        return(
            <div class="information-bar">
                <Form cityHandler={this.cityUpdate}></Form>
            </div>
        )
    }else{
        return(
            <div class="information-bar">
            <Form cityHandler={this.cityUpdate}></Form>
            <hr></hr><h1>Adres</h1>
            <h1>{cinemaInfo[this.state.id].adres}</h1>
            <hr></hr><h1>O kinie</h1>
            <h1>{cinemaInfo[this.state.id].info}</h1>
            <hr></hr><h1>Kontakt</h1>
            <h1>{cinemaInfo[this.state.id].contact}</h1>
            <hr></hr><h1><a href={cinemaInfo[this.state.id].prices} download>Cennik</a></h1>
            
        </div> 
        )
        
    }
}
}

export default InformationBar;
//mozna zamienic na rozwijana liste jeszcze