import React from 'react';
import { Component } from 'react';
import './filters.style.css';
class Filters extends Component {
    constructor() {
        super();
        this.state = {
            cinema: "",
            date: "",
            filmType: ""
        };
        this.filterChange = this.filterChange.bind(this);
        this.change = this.change.bind(this);
    }
    change(event) {
        this.setState({
            filmType: event.target.value
        })
    }
    filterChange(event) {
        this.props.setStateHandler("type", this.state.filmType);
        event.preventDefault();
    }
    render() {
        const { filmType } = this.state;
        return (
            <div class="filters">
                <br></br>
                <form>
                    <div class="filter">
                        <select value={filmType} onChange={this.change}>
                            <option value="" >-</option>
                            <option value="dramat" >Dramat</option>
                            <option value="animowany">Animowany</option>
                            <option value="komedia">Komedia</option>
                        </select>
                        <button onClick={this.filterChange}>FILTRUJ</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Filters;