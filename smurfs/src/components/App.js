import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import {getSmurfs} from '../actions';
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
   <header>
     <h1 className="Title">{`Welcome to Smurf Village`}</h1>
     <SmurfForm />
     <Smurfs />
     </header>
     {this.props.error ? <h3>Error Getting Smurfs</h3> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const{smurfsReducer} = state;
  return {
    smurfs: smurfsReducer.smurfs,
    error: smurfsReducer.error,
    gettingSmurfs: smurfsReducer.gettingSmurfs
  };
};

export default connect(mapStateToProps,{getSmurfs})(App);
