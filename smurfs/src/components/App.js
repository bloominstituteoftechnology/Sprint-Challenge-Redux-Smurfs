import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import getSmurfsAction from '../actions/getSmurfsAction';
import addSmurfAction from '../actions/addSmurfAction';
import deleteSmurfAction from '../actions/deleteSmurfAction';
import AddSmurf from './AddSmurf';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfsAction();
  }

  onSubmitDelete = event => {
    event.preventDefault();
    this.props.deleteSmurfAction(this.state);
    
  };

  render() {
    return (
      <div>
        <AddSmurf />
        <ul>
          {this.props.smurfs.map((smurf, index, id) => {
            return (
              <div>
                <li key={smurf.id}>
                  <div>Name: {smurf.name}</div>
                  <div>Age: {smurf.age}</div>
                  <div>Height: {smurf.height}</div>
                  <button onClick={event => this.onSubmitDelete(event)}> X </button>
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
  addSmurfAction,
  deleteSmurfAction
};

export default connect(mapStateToProps, actions)(App);
