import React, { Component } from 'react';

import './App.css';
import UpperBar from './upperBar/upperBar.component';
import ImageBar from './imageBar/imageBar.component';
import Filters from './filters/filters.component';
import Films from './films/films.component';
import InformationBar from './information/informationBar.component';
class App extends Component {
  constructor(){
    super();
    this.state={
      display: "repertoire",
      type: ""
    };
    this.repertoireShow = this.repertoireShow.bind(this);
    this.informationShow = this.informationShow.bind(this);
    this.dramaFilter = this.dramaFilter.bind(this);
    this.comedyFilter = this.comedyFilter.bind(this);
    this.animeFilter = this.animeFilter.bind(this);
    this.noneFilter = this.noneFilter.bind(this);

  }
  repertoireShow(){
    this.setState({
      display:"repertoire"
    });
  }
  informationShow(){
    this.setState({
      display:"information"
    });
  }
  dramaFilter(){
      this.setState({
        type:"Dramat"
      });
      console.log("drama filter!")
    }
    animeFilter(){
      this.setState({
        type:"Animowany"
      });
      console.log("anime filter!")
    }
    comedyFilter(){
      this.setState({
        type:"Komedia"
      });
      console.log("comedy filter!")
    }
    noneFilter(){
      this.setState({
        type:""
      });
      console.log("none filter!")
    }
  render(){
    if(this.state.display==="repertoire"){
      return (
        <div className="App">
            <UpperBar repertoireHandler={this.repertoireShow} informationHandler={this.informationShow}/>
            <ImageBar/>
            <Filters name={this.state.type} noneHandler={this.noneFilter} dramaHandler={this.dramaFilter} comedyHandler={this.comedyFilter} animeHandler={this.animeFilter}/><br/><br/>
            <Films name={this.state.type}/>
        </div>
      );
    }
    else if(this.state.display==="information"){
      return(
        <div className="App">
            <UpperBar repertoireHandler={this.repertoireShow} informationHandler={this.informationShow} />
            <InformationBar></InformationBar>
        </div>
        
      ); 
    }
    }
  }
//zrob rozwijana liste w info, zrob logowanie, potem dodaj pasek wyszukiwania kino i data
//wazna lekcja na dzis: w funkcji map mozna stawiac warunek przed return
export default App;
