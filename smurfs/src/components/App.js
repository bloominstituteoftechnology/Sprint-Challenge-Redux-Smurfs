import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchSmurfs } from '../actions';
import SmurfsContainer from '../Containers/SmurfsContainer';
import FormContainer from '../Containers/FormContainer';

class App extends Component {
  componentDidMount(){
    this.props.fetchSmurfs();
  }

  render(){
    return (
      <div className="app">
        <SmurfsContainer />
        <FormContainer />
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs })(App);
