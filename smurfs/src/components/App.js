import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs } from "../actions";
import logo from '../logo.svg';
import SmurfForm from './SmurfForm';
import Smurf from './Smurf';

class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        {this.props.error !== null ? <h3>{this.props.error}</h3> : null}
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            Welcome to Smurf Village
            {this.props.smurfs.map(smurf => {
              return (
                <Smurf key={smurf} smurf={smurf} />
              );
            })}
            <SmurfForm />
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetching: state.fetchingSmurfs,
    fetched: state.fetchedSmurfs,
    adding: state.addingSmurf,
    added: state.addedSmurf,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);