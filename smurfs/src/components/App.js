import React, { Component } from 'react';
import './App.css';
import SmurfsList from './SmurfsList'
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/index';
import AddSmurfForm from './AddSmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsList />
        <AddSmurfForm />
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs })(App);
