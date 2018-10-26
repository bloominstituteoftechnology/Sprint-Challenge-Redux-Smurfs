import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import SmurfList from './smurfList';


class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <SmurfList smurfs={this.props.smurfs} />

      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log('THIS IS STATE', state);
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs,
  }
}
export default connect(mapStateToProps, { getSmurfs })(App);
