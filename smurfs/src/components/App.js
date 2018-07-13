import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Smurfs from './Smurfs';
import background from '../images/background.jpg';

const APP = styled.div`
  height: 100vh;
  background: url(${background});
  background-size: cover;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 5px #0a1f42;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  text-shadow: 3px 3px 5px #0a1f42;
`
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <Router>
        <APP>
          <Route exact path="/" component={Header} />
          <Route exact path="/smurfs" component={Smurfs}/>
          {/* <Route exact path="/smurfs" component={SmurfForm} />
          <Route path="/smurfs/:id" render ={props => <Smurf {...props} updateState={this.updateState}/>} /> */}
        </APP>
      </Router>
    );
  }
}

export default App;
