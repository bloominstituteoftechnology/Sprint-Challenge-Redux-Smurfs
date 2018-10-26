import React from 'react';
import styled from 'styled-components';

import { StyledButton, StyledInput, Container } from '../Style';

const StyledForm = styled.form`
  width: 100%;
  padding: 20px 100px;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  margin-bottom: 50px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
`;
const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FormButtons = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const SmurfForm = props => {
  return (
    <Container>
      <StyledForm onSubmit={props.onSubmit}>
          <FormInputs>
              <StyledInput type="text" name="name" placeholder="Name" value={props.smurf.name} onChange={props.onChange} autoComplete="off" required/>
              <StyledInput type="number" name="age" placeholder="Age" value={props.smurf.age} onChange={props.onChange} autoComplete="off" required/>
              <StyledInput type="text" name="height" placeholder="Height" value={props.smurf.height} onChange={props.onChange} autoComplete="off" required/>
          </FormInputs>
          <FormButtons>
              <StyledButton type="submit">{props.isEditMode?'Update Smurf':'Add to Village'}</StyledButton>
          </FormButtons>
      </StyledForm>
    </Container>
  );
}

export default SmurfForm;
