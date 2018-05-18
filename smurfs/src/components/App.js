import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import logo from './logo.svg';
import SmurfsList from './SmurfsList';
import NewSmurfForm from './NewSmurfForm';
import { getSmurfs } from '../actions'


class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">

      <header className="App-header"></header>
      <h1 className="header-title">Welcome To Smurfs Village!</h1>
    
      {this.props.fetchingSmurfs ? (<img src={logo} className="App-logo" alt="logo" />) : 
        [ <NewSmurfForm />, <SmurfsList smurfs={this.props.smurfs} />] }
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs } )(App);
