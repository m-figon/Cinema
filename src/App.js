import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import UpperBar from './upperBar/upperBar.component';
import ImageBar from './imageBar/imageBar.component';
import Filters from './filters/filters.component';
import Films from './films/films.component';
import InformationBar from './information/informationBar.component';
import {connect} from 'react-redux';
import {fetchPosts} from './actions/postAction.js';
import {createPost} from './actions/postAction.js';

import PropTypes from 'prop-types';
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
  componentDidMount(){
    this.props.createPost("redux !");
    //console.log(this.props.items);
  }
  render() {
    console.log(this.props.posts);
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
App.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
export default connect(mapStateToProps, {createPost})(App);
