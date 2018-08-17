import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions/index';
import SmurfList from '../components/SmurfList';
import NewSmurf from './NewSmurf';

class App extends Component {

componentDidMount() {
  this.props.getSmurfs();
}

  render() {
    return (
      <div className="App">
       <NewSmurf />
       <SmurfList {...this.props}/>
      </div>
    );
  }
}

const mapToStateProps = (state) => {
  console.log(state);
  return state;
}

export default connect(mapToStateProps, {getSmurfs})(App);
