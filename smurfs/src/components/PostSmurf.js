import React from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions';
import styled from 'styled-components';

const StyledDiv = styled.div`
`;

class PostSmurf extends React.Component {
  state = {
    name: '',
    age: '',
    height: '',
  }

  handleSubmit = () => {
    this.props.postSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    });
  }

  handleChange = () => {
    console.log('changing');
  }

  render() {
    return(
      <StyledDiv>
        <form onSubmit={() => this.handleSubmit()}>
          <input 
            type='text'
            placeholder='name'
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input 
            type='number'
            placeholder='age'
            required
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input 
            type='email'
            placeholder='email'
            required
            onChange={this.handleChange}
            value={this.state.email}
          />
          <button type='submit'>Submit</button>
        </form>
      </StyledDiv>
    )
  }

} 

export default connect(null, { postSmurf })(PostSmurf);
