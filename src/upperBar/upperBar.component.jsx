import React from 'react';
import {Component} from 'react';
import logo from '../logo.svg';
import './upperBar.style.css';
import Popup from "../popup/popup.component";
class UpperBar extends Component{
    constructor(){
        super();
        this.state={
            clicked: false,
            operation: "Zaloguj",
            loginName: ""
        };
        this.login = this.login.bind(this);
    }
    login(){
        if(this.state.clicked===false){
            this.setState({
                clicked: true
            });
        }
        if(this.state.clicked===true){
            this.setState({
                clicked: false
            });
        }
        
    }
    render(){
            return(
                <div class="upper-bar">
                    <Popup name={this.state.loginName} id={this.state.clicked}/>
                    <img src={logo} className="App-logo" alt="logo" />
                    <div class="text-bar">
                        <h1 onClick={this.props.repertoireHandler}> RCinema</h1>
                        <h1 class="distance" onClick={this.props.repertoireHandler}> Repertuar</h1>
                        <h1 onClick={this.props.informationHandler}> Informacje</h1>
                        <h1 onClick={this.login}>Zaloguj/Wyloguj</h1>
                    </div>
                </div>
            )
        
        }
    
}

export default UpperBar;