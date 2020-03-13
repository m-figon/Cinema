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
      display: "repertoire"
    };
    this.repertoireShow = this.repertoireShow.bind(this);
    this.informationShow = this.informationShow.bind(this);
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
  render(){
    if(this.state.display==="repertoire"){
      return (
        <div className="App">
            <UpperBar repertoireHandler={this.repertoireShow} informationHandler={this.informationShow}/>
            <ImageBar/>
            <Filters/><br/><br/>
            <Films/>
        </div>
      );
    }else if(this.state.display==="information"){
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
export default App;
