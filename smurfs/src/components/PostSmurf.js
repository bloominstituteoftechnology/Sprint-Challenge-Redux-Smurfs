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

  handleSubmit = event => {
    event.preventDefault();
    this.props.postSmurf(this.state)
    this.setState( {
      name: '',
      age: '',
      height: '',
    } );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return(
      <StyledDiv>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            name='name'
            placeholder='name'
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input 
            type='number'
            name='age'
            placeholder='age'
            required
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input 
            type='text'
            name='height'
            placeholder='height'
            required
            onChange={this.handleChange}
            value={this.state.height}
          />
          <button type='submit'>Submit</button>
        </form>
      </StyledDiv>
    )
  }

} 

export default connect(null, { postSmurf })(PostSmurf);
