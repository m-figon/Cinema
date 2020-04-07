import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import UpperBar from './upperBar/upperBar.component';
import ImageBar from './imageBar/imageBar.component';
import Filters from './filters/filters.component';
import Films from './films/films.component';
import InformationBar from './information/informationBar.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      type: ""
    };
    this.setStateChange = this.setStateChange.bind(this);
  }
  setStateChange(type1, value1, type2, value2) {
    this.setState({
      [type1]: value1,
      [type2]: value2
    });
  }
  
  render() {
    const HomeComponent = () =>{
      return (
        <div className="App">
          <UpperBar setStateHandler={this.setStateChange} />
          <ImageBar />
        </div>
      );
    }
    const RepertoireComponent = () =>{
      return (
        <div className="App">
          <UpperBar setStateHandler={this.setStateChange} />
          <ImageBar />
          <Filters name={this.state.type} setStateHandler={this.setStateChange} /><br /><br />
          <Films name={this.state.type} />
        </div>
      );
    }
    const InformationComponent = () =>{
      return (
        <div className="App">
          <UpperBar setStateHandler={this.setStateChange} />
          <InformationBar />
        </div>
      );
    }

      return(
      <>
        <Route exact path='/' component={HomeComponent}/>
        <Route exact path='/repertoire' component={RepertoireComponent}/>
        <Route exact path='/information' component={InformationComponent}/>
      </>
      );
  }
}

export default App;
