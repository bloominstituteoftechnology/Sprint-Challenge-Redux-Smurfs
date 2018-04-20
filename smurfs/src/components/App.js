import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Card, CardTitle, CardText, Container, Row, Col, Button} from 'reactstrap';

import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return <div className="App">
        <SmurfForm />
        <Smurfs />
      </div>;
  }
}

export default App;
