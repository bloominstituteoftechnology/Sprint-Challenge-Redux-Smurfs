import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import styled from 'styled-components';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

const AppDiv = styled.div`
  border: 1px solid red;
`;

class App extends Component {
  componentDidMount(){
    console.log('CDM')
  }

  render() {
    return (
      <AppDiv>
        <h1>Smurfs</h1>
      </AppDiv>
    );
  }
}

const mapStateToProps = state => {
  return {state: state};
}

export default connect(mapStateToProps)(App);
