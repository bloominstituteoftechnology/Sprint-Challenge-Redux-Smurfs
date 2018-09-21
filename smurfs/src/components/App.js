import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions';
import WelcomeSmurf from './WelcomeSmurf.png';

 class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <header>
          <img src={WelcomeSmurf} className="WelcomeSmurf" alt="Welcome Smurf" />
          <div className="headerText">
            <h1 className="title">Welcome to Smurf Village</h1>
            <p className="citizenship">Enter information for citizenship</p>
          </div>
        </header>
        <SmurfForm />
        <Smurfs />
        {this.props.error ? <h3>Error Getting Smurfs</h3> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  smurfs: state.smurfs,
  fetching: state.gettingSmurfs,
  error: state.error
  }
};


export default connect(mapStateToProps,{getSmurfs})(App);
