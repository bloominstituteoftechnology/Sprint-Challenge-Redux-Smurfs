import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form `
  display: flex,
  flex-direction: column
`;

export default function SmurfForm(props) {
  return (
    <StyledForm onSubmit={props.submitSmurf}>
      <input type='text' placeholder='name...' value={props.newName} name='newName' onChange={props.changeHandler} />
      <br/><input type='number' placeholder='age...' value={props.newAge} name='newAge' onChange={props.changeHandler} />
      <br/><input type='number' placeholder='height in cm...' value={props.newHeight} name='newHeight' onChange={props.changeHandler} />
      <br/><button type='submit'>Add New Smurf!</button>
    </StyledForm>
  )
}
