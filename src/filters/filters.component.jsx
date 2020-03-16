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
    this.filterChange = this.filterChange.bind(this);
    this.change = this.change.bind(this);
}
change(event){
    this.setState({
        filmType: event.target.value
    })
}
filterChange(event){
    const {dramaHandler,comedyHandler,animeHandler,noneHandler} = this.props;
    const {filmType} = this.state;
    if(filmType==="dramat"){
        dramaHandler();
        event.preventDefault();

    }
    else if(filmType==="komedia"){
        comedyHandler();
        event.preventDefault();

    }else if(filmType==="animowany"){
        animeHandler();
        event.preventDefault();

    }else if(filmType==="none"){
        noneHandler();
        event.preventDefault();

    }
   
}
render(){
    const {filmType} = this.state;
    return(
        <div class="filters">
            <br></br>
        <form>
        <div class="filter">
                <select value={filmType} onChange={this.change}>
                    <option value="none" >-</option>
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