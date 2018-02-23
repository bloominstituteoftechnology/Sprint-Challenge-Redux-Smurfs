import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Form from './Form';
import List from './List';

class App extends Component {
  componentDidMount(){
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        <Form />
        <List />
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs })(App);
