import React, { Component } from 'react';
class OneInfo extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
    }
    showText() {
        this.setState({
            show: true
        })
    }
    render() {
        var inform = null;
        const { show } = this.state;
        const { id, name } = this.props;
        if (name === "O KINIE") {
            inform = this.props.information[id].info;
        } if (name === "ADRES") {
            inform = this.props.information[id].adres;
        } if (name === "KONTAKT") {
            inform = this.props.information[id].contact;
        }
        if (show) {
            return (
                <React.Fragment>
                    <h1 onMouseEnter={() => this.showText()}>{name}</h1>
                    <p>{inform}</p>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h1 onMouseEnter={() => this.showText()}>{name}</h1>
                </React.Fragment>
            );
        }
    }

}

export default OneInfo;