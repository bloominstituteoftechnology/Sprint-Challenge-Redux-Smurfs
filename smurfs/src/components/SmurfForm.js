import React from 'react';
import styled from 'styled-components';
import { Form } from 'reactstrap';

const StyledForm = styled(Form) `
  display: flex,
  flex-direction: column
`;

export default function SmurfForm(props) {
  return (
    <StyledForm onSubmit={props.submitSmurf}>
      <input type='text' placeholder='name...' value={props.newName} name='newName' onChange={props.changeHandler} />
      <input type='text' placeholder='age...' value={props.newAge} name='newAge' onChange={props.changeHandler} />
      <input type='text' placeholder='height...' value={props.newHeight} name='newHeight' onChange={props.changeHandler} />
      <button type='submit'>Add New Smurf!</button>
    </StyledForm>
  )
}
