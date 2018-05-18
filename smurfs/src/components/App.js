import React, { Component } from 'react';
// import logo from './logo.svg';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        {/* <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        <SmurfForm />
        {this.props.error ? <h4>Error Fetching Smurfs</h4> : null }
        {/* {this.componentWillReceiveProps.gettingSmurfs ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <Smurfs smurfs={this.props.smurfs} />
        )} */}
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { smurfReducer } = state;
  return {
    smurfs: smurfReducer.smurfs,
    error: smurfReducer.error,
    gettingSmurfs: smurfReducer.gettingSmurfs
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
