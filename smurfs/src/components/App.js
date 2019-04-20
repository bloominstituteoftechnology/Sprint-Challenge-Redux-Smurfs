import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm'

class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    const { smurfs } = this.props;
    return (
      <div className="App">
      {this.props.fetchingSmurfs ? <h1>Loading...</h1> : <h1>SMURFS</h1>}
      <SmurfForm />
      <Smurfs smurfs={smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
