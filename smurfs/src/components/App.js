import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {getTheSmurfs} from '../actions';
import SmurfForm from './smurfForm'
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
    console.log('CDM1')
    this.props.getTheSmurfs();
    console.log(this.props)
  }

  render() {
    console.log(this.props.state.smurfs);
    return (
      <AppDiv>
        <h1>Smurfs</h1>
        {this.props.state.smurfs.map(smurf => {
          return (
            <h1 key={smurf.name}>{smurf.name}</h1>
          )
        }
        )}
        <SmurfForm></SmurfForm>
      </AppDiv>
    );
  }
}

const mapStateToProps = state => {
  return {state: state};
}

const mapDispatchToProps = {
  getTheSmurfs
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
