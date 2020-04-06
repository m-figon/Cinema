import React, { Component } from 'react';
import './popup.style.css';
class Popup extends Component {
    constructor() {
        super();
        this.state = {
            emailTmp: "",
            password: "",
            loged: false
        };
    }
    inputChange(type, event) {
        this.setState({
            [type]: event.target.value
        })
    }
    loginOperation() {
        const { emailTmp, password } = this.state;
        if (emailTmp !== "" && password !== "") {
            this.setState({
                loged: true,
                status: "Zalogowany",
            })
            this.props.setStateHandler("loginName", this.state.emailTmp);
            console.log(this.state.emailTmp);

        } else if (emailTmp === "" && password === "") {
            alert("Prosze podac poprawne dane logowania");
            this.setState({
                loged: false,
                status: "Wylogowany",
                emailTmp: ""
            })
            this.props.setStateHandler("loginName", "");
            console.log(this.state.emailTmp);

        }

    }

    render() {
        const { emailTmp, password, loged } = this.state;
        const { id } = this.props;
        if (id === true && loged === false) {
            return (
                <>
                    <div class="loged">
                        <h1>{this.props.status} {this.props.name}</h1>
                    </div>
                    <div class="pop-up">
                        <form>
                            <h1>Adres e-mail: </h1><input type='text' value={emailTmp} onChange={(e) => this.inputChange("emailTmp", e)} />
                            <h1>Hasło: </h1><input type="password" value={password} onChange={(e) => this.inputChange("password", e)} />
                        </form>
                        <h1 id="log" onClick={() => this.loginOperation()}>Zaloguj</h1>
                    </div>
                </>
            )
        } else {
            return (
                <div class="loged">
                    <h1>{this.props.status} {this.props.name}</h1>
                </div>
            )
        }
    }



}
export default Popup;