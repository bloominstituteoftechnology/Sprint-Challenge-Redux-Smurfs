import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';

import './App.css';
import {
  fetchSmurfs,
  addSmurf,
  deleteSmurf,
  updateSmurf,
  selectSmurf,
} from '../actions';

import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';


class App extends Component {
  state = {
    update: false,
  }

  componentDidMount() {
    console.log ('mounted');
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <Container style={{ padding: '20px' }} className="App">
        <Header as="h1">Redux - Smurfs</Header>
        <Container>Welcome to my Redux version of Smurfs!</Container>
        <SmurfForm addSmurf={this.props.addSmurf}/>
        <SmurfList
          smurfs={this.props.smurfs}
          fetchingSmurfs={this.props.fetchingSmurfs}
          deleteSmurf={this.props.deleteSmurf}
          error={this.props.error}
        />
      </Container>
    );
  }
}

export default connect(
  state => state,
  {
    fetchSmurfs,
    addSmurf,
    deleteSmurf,
    updateSmurf,
    selectSmurf,
  }
)(App);
