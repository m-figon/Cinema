import React, {Component} from 'react';
import cinemaInfo from '../cinemaInformation.json';

class OneInfo extends Component{
    constructor(){
        super();
        this.state={
            show: false
        };
        this.showText = this.showText.bind(this);
    }
    showText(){
        this.setState({
            show: true
        })
    }
    render(){
        var info=null;
        const {show} = this.state;
        const {id,name} = this.props;
        if(name==="O KINIE"){
            info=cinemaInfo[id].info;
        }if(name==="ADRES"){
            info=cinemaInfo[id].adres;
        }if(name==="KONTAKT"){
            info=cinemaInfo[id].contact;
        }
        if(show){
            return(
                <React.Fragment>
                <h1 onMouseEnter={this.showText}>{name}</h1>
                <p>{info}</p>
                </React.Fragment>
            );
        }else{
            return(
                <React.Fragment>
                <h1 onMouseEnter={this.showText}>{name}</h1>
                </React.Fragment>
            );
        }
    }
    
} 

export default OneInfo;