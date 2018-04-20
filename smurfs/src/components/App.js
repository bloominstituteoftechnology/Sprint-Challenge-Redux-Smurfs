import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfsList from './SmurfsList';

import { connect } from 'react-redux';




/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div>
       
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className="container">
          <SmurfsList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
