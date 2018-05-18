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
      <header className="App-header">
        <h1>SMURFS! 2.0 W/ Redux</h1>
      </header>
        <NewSmurfForm />
        {this.props.fetchingSmurfs ? (<img src={logo} className="App-logo" alt="logo" />) : (<SmurfsList smurfs={this.props.smurfs} />) }
        {/* <SmurfsList smurfs={this.props.smurfs} /> */}
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
