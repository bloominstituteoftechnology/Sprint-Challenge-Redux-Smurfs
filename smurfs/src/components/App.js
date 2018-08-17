import React, { Component } from 'react';
import './App.css';
import SmurfsList from './SmurfsList';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';

class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
          <h1>Smurfs Village</h1>
          <SmurfsList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
    smurfs : state.smurfs,
})

export default connect(mapStateToProps, {getSmurfs})(App);
