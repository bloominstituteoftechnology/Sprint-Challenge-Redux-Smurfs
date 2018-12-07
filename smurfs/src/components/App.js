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
    id: '',
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  toggleForm = (id) => {
    if (id) {
      this.setState({ update: true, id: id });
      this.props.selectSmurf(id);
    } else {
      this.setState({ update: false, id: "" });
    }
  };

  render() {
    return (
      <Container style={{ padding: '20px' }} className="App">
        <Header as="h1">Redux - Smurfs</Header>
        <Container>Welcome to my Redux version of Smurfs!</Container>
        {
          !this.state.update ? 
            <SmurfForm handleSubmit={this.props.addSmurf}/> :
            <SmurfForm
              update
              smurf={this.props.smurf}
              toggleForm={this.toggleForm}
              handleSubmit={this.props.updateSmurf}
            />
        }
        <SmurfList
          smurfs={this.props.smurfs}
          fetchingSmurfs={this.props.fetchingSmurfs}
          deleteSmurf={this.props.deleteSmurf}
          toggleForm={this.toggleForm}
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
