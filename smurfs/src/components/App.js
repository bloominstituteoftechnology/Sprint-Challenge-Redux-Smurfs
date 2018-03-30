import React, {Component} from 'react';
import {connect} from 'react-redux';
import Smurfs from './smurfs';
import {getSmurfs} from '../actions';
import Window from '../components/Window';
import Vapor from '../components/Vapor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ position: 'absolute', zIndex: '10'}}> <Smurfs /> </div>
        <Vapor />
        <Window /> 
      </div>
    );
  }

  componentDidMount() {
    this
      .props
      .getSmurfs();
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, {getSmurfs})(App);