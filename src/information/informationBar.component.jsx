import React from 'react';
import { Component } from 'react';
import './informationBar.style.css';
import Form from './form/form.component';
import OneInfo from './oneInfo/oneInfo.component.jsx';
class InformationBar extends Component {
    constructor() {
        super();
        this.state = {
            city: "",
            id: 20
        };
    }
    
    cityUpdate(event) {
        var num = 0;
        const { value } = event.target;
        if (value === "gdansk") {
            num = 0;
        } else if (value === "warszawa") {
            num = 1;
        } else if (value === "krakow") {
            num = 2;
        } else if (value === "wroclaw") {
            num = 3;
        }
        this.setState({
            city: value,
            id: num
        })
        event.preventDefault();
    }
    render() {
        console.log("information:");
        console.log(this.props.info);
        const { id } = this.state;
        if (this.state.city === '') {
            return (
                <>
                    <Form cityHandler={(e) => this.cityUpdate(e)}></Form>
                </>
            )
        } else {
            return (
                <>
                    <Form cityHandler={(e) => this.cityUpdate(e)}></Form>
                    <br></br><br></br><br></br><br></br><br></br>
                    <div class="form">
                        <OneInfo information={this.props.info} id={id} name="ADRES" />
                        <OneInfo information={this.props.info} id={id} name="O KINIE" />
                        <OneInfo information={this.props.info} id={id} name="KONTAKT" />
                        <h1><a href={this.props.info[id].prices} download>Cennik</a></h1>
                    </div>
                </>
            )

        }
    }
}

export default InformationBar;