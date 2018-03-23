import React, { Component } from 'react';
import { connect } from 'react-redux';

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

import { getSmurfs } from '../actions';
class App extends Component {
  
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <SmurfList />
        <SmurfForm />
      </div>
    );
  }
}

export default connect(null, { getSmurfs })(App);