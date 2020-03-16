import React from 'react';
import {Component} from 'react';
import './informationBar.style.css';
import Form from './form/form.component';
import cinemaInfo from "./cinemaInformation.json";
import OneInfo from './oneInfo/oneInfo.component.jsx';
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
    const {value} = event.target;
    if(value==="gdansk"){
        num=0;
    }else if(value==="warszawa"){
        num=1;
    }else if(value==="krakow"){
        num=2;
    }else if(value==="wroclaw"){
        num=3;
    }
    this.setState({
        city: value,
        id: num
    })
    event.preventDefault();
}
render(){
    const {id}=this.state;
    if(this.state.city===''){
        return(
            <>
                <Form cityHandler={this.cityUpdate}></Form>
            </>
        )
    }else{
        return(
                <>
                <Form cityHandler={this.cityUpdate}></Form>
                <br></br><br></br><br></br><br></br><br></br>
                <div class="form">
                <OneInfo id={id} name="ADRES"/>
                <OneInfo id={id} name="O KINIE"/>
                <OneInfo id={id} name="KONTAKT"/>
                <h1><a href={cinemaInfo[id].prices} download>Cennik</a></h1>
                </div> 
                </>
        )
        
    }
}
}

export default InformationBar;