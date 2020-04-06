import React from 'react';
import { Component } from 'react';
import logo from '../logo.svg';
import './upperBar.style.css';
import Popup from "../popup/popup.component";
class UpperBar extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
            operation: "Zaloguj",
            loginName: "",
            loginState: "Wylogowany",
            loginTmp: ""
        };
        this.setStateChange = this.setStateChange.bind(this);
    }
    setStateChange(type, value) {
        this.setState({
            [type]: value
        })
    }
    login() {
        if (!this.state.clicked) {
            this.setState({
                clicked: true,
                operation: "Wyloguj",
                loginState: "Zalogowany",
                loginName: this.state.loginTmp
            });
        }
        if (this.state.clicked) {
            this.setState({
                clicked: false,
                operation: "Zaloguj",
                loginTmp: this.state.loginName,
                loginName: "",
                loginState: "Wylogowany"
            });
        }

    }
    render() {
        const { loginName, clicked } = this.state;
        return (
            <div class="upper-bar">
                <Popup status={this.state.loginState} setStateHandler={this.setStateChange} name={loginName} id={clicked} />
                <img src={logo} className="App-logo" alt="logo" />
                <div class="text-bar">
                    <h1 onClick={() => this.props.setStateHandler("display", "repertoire")}> RICNEMA</h1>
                    <h1 class="distance" onClick={() => this.props.setStateHandler("display", "repertoire")}> REPERTUAR</h1>
                    <h1 onClick={() => this.props.setStateHandler("display", "information")}> INFORMACJE</h1>
                    <h1 onClick={() => this.login()}>{this.state.operation}</h1>
                </div>
            </div>
        )

    }

}

export default UpperBar;