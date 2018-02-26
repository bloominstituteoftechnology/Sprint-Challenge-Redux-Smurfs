import React, { Component } from 'react';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './App.css';
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';
import * as actions from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.actions.getSmurfData();
  }

  render() {
    return (
      <div className="App container">
        <SmurfForm {...this.props}/>
        <Smurfs {...this.props}/>
      </div>
    );
  }
  /*componentDidMount() {
    this.loadSmurfs();
  }

  loadSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({
          smurfs: response.data,
        });
      })
      .catch(() => {
        console.error('error getting data');
      });
  };*/
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
