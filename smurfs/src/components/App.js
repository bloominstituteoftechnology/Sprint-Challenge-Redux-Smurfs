import React, { Component } from 'react';
import { connect } from 'react-redux';

import SmurfList from './SmurfList';
// import SmurfForm from './SmurfForm';

import { getFriends } from '../actions';
class App extends Component {
  
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <SmurfList />
        {/* <SmurfForm /> */}
      </div>
    );
  }
}

export default connect(null, { getFriends })(App);