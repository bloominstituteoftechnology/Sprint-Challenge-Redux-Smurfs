import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/getSmurfs';
import Smurfs from './smurfs';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    const { smurfs } = this.props;

    return (
      <div className="App">
        <Smurfs smurfs={smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {    
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
