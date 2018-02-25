import React, { Component } from 'react';
import PostSmurf from './PostSmurf';
// import Smurfs from './Smurfs';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import styled from 'styled-components';

const StyledDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
  background-color: #88ccff;
  text-align: center;
  input {
    display: block;
    width: 200px;
    margin: 0 auto;
  }
`;

class App extends Component {

  componentDidMount = () => {
    this.props.getSmurfs();
  }

  render() {
    return (
      <StyledDiv>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <PostSmurf />
        {/* <Smurfs /> */}
        {this.props.smurfs.forEach(val => {
          console.log(val);
        })}
      </StyledDiv>
    );
  }
}

const mappStateToProps = state => {
  return {
    smurfs: state.smurfs,
  }
};

export default connect(mappStateToProps, { getSmurfs })(App);
