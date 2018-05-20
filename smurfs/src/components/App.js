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
      {this.props.error !== null ? <div className="error">{this.props.error}</div> : null}
      {this.props.fetchingSmurfs ? (<img src={logo} className="App-logo" alt="logo" />) : 
        [ <NewSmurfForm />, <SmurfsList smurfs={this.props.smurfs} />] } {/*instead of passing smurfs down as props to child component see smurfs can be passed directly into SmurfsList by connecting that component to state*/}
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
