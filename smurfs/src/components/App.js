import React, { Component } from 'react';
import PostSmurf from './PostSmurf';
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

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount = () => {
    this.props.getSmurfs();
  }

  render() {
    return (
      <StyledDiv>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <PostSmurf />
      </StyledDiv>
    );
  }
}



export default connect(null, { getSmurfs })(App);
