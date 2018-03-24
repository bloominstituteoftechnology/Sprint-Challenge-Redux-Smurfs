import React, { Component } from 'react';
import './App.css';
import SmurfetteForm from './SmurfetteForm';
import SmurfetteList from './SmurfetteList';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfetteForm />
        <SmurfetteList />
      </div>
    );
  }

  componentDidMount() {
    this.props.getSmurfs();
  }
}

export default connect(null, {getSmurfs})(App);
