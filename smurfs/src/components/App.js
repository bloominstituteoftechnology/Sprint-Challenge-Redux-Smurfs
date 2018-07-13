import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import NavBar from './NavBar';
import Smurfs from './Smurfs';
import AddSmurfForm from './AddSmurfForm';
import './App.css';

class App extends Component {
  componentDidMount() {
    const URL = 'http://localhost:3333/smurfs';
    this.props.fetchData(URL);
  }

  render() {
    return (
      <div className="App">
        {!this.props.addClicked ? (
          <NavBar className="sticky" />
        ) : (
          <AddSmurfForm smurfs={this.props.smurfs} />
        )}
        {this.props.fetched && !this.props.addClicked ? (
          <Smurfs smurfs={this.props.smurfs} />
        ) : (
          <h1>Entering the Smurf village...</h1>
        )}
        {this.props.error ? (
          <div style={{ color: 'red', fontSize: '30px', padding: '20px' }}>
            {this.props.error}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs,
    fetched: state.smurfsFetched,
    addClicked: state.addClicked,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { fetchData },
)(App);
