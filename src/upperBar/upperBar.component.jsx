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
        const {loginName,clicked} = this.state;
        const {repertoireHandler, informationHandler} = this.props;
            return(
                <div class="upper-bar">
                    <Popup name={loginName} id={clicked}/> 
                    
                    <img src={logo} className="App-logo" alt="logo" />
                    <div class="text-bar">
                        <h1 onClick={repertoireHandler}> RICNEMA</h1>
                        <h1 class="distance" onClick={repertoireHandler}> REPERTUAR</h1>
                        <h1 onClick={informationHandler}> INFORMACJE</h1>
                        <h1 onClick={this.login}>ZALOGUJ/WYLOGUJ</h1>
                    </div>
                </div>
            )
        
        }
    
}

export default UpperBar;