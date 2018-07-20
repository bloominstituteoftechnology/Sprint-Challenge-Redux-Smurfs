import React, { Component } from 'react';
import './App.css';
import SmurfForm from './SmurfForm';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';


class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs,
    error: state.error,
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
