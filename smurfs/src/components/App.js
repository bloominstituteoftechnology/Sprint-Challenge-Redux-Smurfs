import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import getSmurfsAction from '../actions/getSmurfsAction';
import addSmurfAction from '../actions/addSmurfAction';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfsAction();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.smurfs.map((smurf, index) => {
            return (
              <div>
              <AddSmurf />
              <li>
                <div>Name: {smurf.name}</div>
                <div>Age: {smurf.age}</div>
                <div>Height: {smurf.height}</div>
              </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    fetched: store.fetched,
    smurfs: store.smurfsReducer.smurfs,
    error: store.error
  };
};

const actions = {
  getSmurfsAction,
  addSmurfsAction
};

export default connect(mapStateToProps, actions)(App);
