import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
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
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { fetchData },
)(App);
