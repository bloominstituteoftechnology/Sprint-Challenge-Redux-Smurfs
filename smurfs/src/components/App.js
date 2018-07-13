import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

const SmurfDiv = styled.div`
  background:#fff;
  position:absolute;
  opacity:.6; /* manipulate to desired opacity */
  height:20%;
  width:10%;
  opacity:0;
  &:hover{
    opacity:.6;
  }
  
  /* Custom for each smurf*/
  top: ${props => props.top};
  left: ${props => props.left};
`

class App extends Component {
  render() {
    const arr = [{"name":"Pappa Smurf","age":200,"height":"5cm", "top":"43%", "left":"28%"}, {"name":"Vanity Smurf","age":200,"height":"5cm", "top":"27%", "left":"39.7%"}]
    return (
      <div className="App">
        <h1>Smurf Redux Village</h1>
        { arr.map(smurf => <SmurfDiv top={smurf.top} left={smurf.left}>{smurf.name}</SmurfDiv>)}
      </div>
    );
  }
}

export default App;
