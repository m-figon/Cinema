import React from 'react';
import {Component} from 'react';
import './filters.style.css';
class Filters extends Component{
constructor(){
    super();
    this.state={
        cinema: "",
        date: "",
        filmType: "none"
    };
    this.cinemaChange = this.cinemaChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.filterChange = this.filterChange.bind(this);
}
cinemaChange = event =>{
    this.setState({
        cinema: event.target.value
    })
}

dateChange(event){
    this.setState({
        date: event.target.value
    })
}
filterChange(event){
    this.setState({
        filmType: event.target.value
    })

    if(this.state.filmType==="dramat"){
        this.props.dramaHandler();
    }
    else if(this.state.filmType==="komedia"){
        this.props.comedyHandler();
    }else if(this.state.filmType==="animowany"){
        this.props.animeHandler();
    }else if(this.state.filmType==="none"){
        this.props.noneHandler();
    }
}
render(){
    return(
        <div class="filters">
            <br></br>
        <form>
            <label>Kino: </label><input type="text" value={this.state.cinema} 
            onChange={this.cinemaChange}/>
            <label>Data: </label><input type="text" value={this.state.date} onChange={this.dateChange}/>
            <label>Gatunek: </label>
                <select value={this.state.filmType} onChange={this.filterChange}>
                    <option value="none" ></option>
                    <option value="dramat" >Dramat</option>
                    <option value="animowany">Animowany</option>
                    <option value="komedia">Komedia</option>
                </select>
        </form> 
        </div>
    )
}
}

export default Filters;