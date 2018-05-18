import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Smurf from '../components/Smurf.js';
// import logo from './logo.svg';
import { fetchSmurfs } from '../actions/index.js';
import { addSmurfs } from '../actions/index.js';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {this.props.smurfs.map(smurf => {
            return <Smurf key={smurf} smurf={smurf} />;
          })}
          {this.props.fetching ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : null}
          {this.props.error !== null ? <div>{this.props.error}</div> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {fetchSmurfs, addSmurfs})(App);
