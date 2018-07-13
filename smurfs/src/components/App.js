import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions'

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
  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    
    return (
      <div className="App">
        <h1>Smurf Redux Village</h1>
        { this.props.smurfs.map(smurf => <SmurfDiv ket={smurf.name+Math.random()} top={smurf.top} left={smurf.left}>{smurf.name}</SmurfDiv>)}
      </div>
    );
  }
}


const MapStateToProps = (state) =>{
  return {
    smurfs: state.smurfs,
    fetching:state.fetching,
    smurf : state.smurf,
  }
}
export default connect(MapStateToProps,{getSmurfs})(App);
