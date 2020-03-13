import React from 'react';
import {Component} from 'react';
import './filters.style.css';
class Filters extends Component{
constructor(){
    super();
    this.state={
        cinema: "",
        date: "",
    };
    this.cinemaChange = this.cinemaChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
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
render(){
    return(
        <div class="filters">
            <br></br>
        <form>
            <label>Kino: </label><input type="text" value={this.state.cinema} onChange={this.cinemaChange}/>
            <label>Data: </label><input type="text" value={this.state.date} onChange={this.dateChange}/>
        </form> 
        </div>
    )
}
}

export default Filters;