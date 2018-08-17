import React, { Component } from 'react';
import './App.css';
import SmurfsForm from './SmurfsForm/SmurfsForms';
import Smurfs from './Smurfs/Smurfs';

// import { connect } from 'react-redux';
// import { fetching_data } from '../actions';

class App extends Component {
  // componentDidMount() {
  //   this.props.fetching_data();
  // }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <SmurfsForm />
        <Smurfs />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//       fetchingSmurfs: state.smurfsReducer.fetchingSmurfs,
//       smurfs: state.smurfsReducer.smurfs,
//   }
// }

export default (App);
