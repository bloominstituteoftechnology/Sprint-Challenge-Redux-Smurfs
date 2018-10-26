import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';



const AppContainer = styled.div `
  width: 90%;
  margin: 0 auto;
  box-sizing: border-box;
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
      <AppContainer>
      <div></div>

      </AppContainer>
    );
  }
}

export default App;
