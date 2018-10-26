import React, { Component } from 'react';
import './App.css';
import { fetchSmurfs } from '../actions/';
import { connect } from 'react-redux';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfsForm';

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Smurfs</h1>
        <SmurfForm />
        </header>
      <div>
        {this.props.isFetching ? (
          <h1>Loading</h1>
        ): (
          <Smurfs smurfs={this.props.smurfs} />
        )}
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //const{ smurfsReducer } = state; 
  return {
    smurfs: state.SmurfsReducer.smurfs,
    isfetching: state.SmurfsReducer.isfetching
  }
}

export default connect(mapStateToProps, { fetchSmurfs})(App);