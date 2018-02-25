import React from 'react';
import PostSmurf from './PostSmurf';
import { Smurfs } from './Smurfs';
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

class App extends React.Component {

  componentDidMount = () => {
    this.props.getSmurfs();
  }

  render() {
    return (
      <StyledDiv>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <PostSmurf />
        {this.props.smurfs.length > 0 ?
          this.props.smurfs.map((smurf, index) => {
            return (
              <Smurfs key={index} smurf={smurf} />
            );
          })
          : null}
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  }
};

export default connect(mapStateToProps, { getSmurfs })(App);
