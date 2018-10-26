import React from "react";
import styled from 'styled-components'

const StyledForm = styled.form`
  background: #ffffffa6;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 5px;
  margin: 15px;
  box-sizing: border-box;
  box-shadow: 1px 1px 15px blue, -1px -1px 15px blue;
  input {
    background: #0000ffa6;
    border: none;
    margin:  5px;
    border-radius: 10px;
    padding: 2px 10px;
    font-weight: bold;
    color: white;
    text-align:center;
    ::placeholder{
        color:#ffffffa6
    }
    &:focus{
        text-align:left;
    }
  }
  button {
    border-radius: 10px;
    margin:  5px ;
    padding: 2px 45px;
    background: #ffffff;
    box-shadow: 1px 1px 15px lightblue, -1px -1px 15px lightblue;
    border-style: none;
    border: 1px solid lightblue;
    cursor: pointer;
    font-weight: bold;
    color: darkblue; 
  }
`;

const Form = props =>{

return (
    <StyledForm onSubmit={props.submitHandler}>
      <input
        type="text"
        name='name'
        value={props.state.name}
        onChange={props.changeHandler}
        placeholder='Smurf name'
      />
      <input
        type="text"
        name='height'
        value={props.state.height}
        onChange={props.changeHandler}
        placeholder='Smurf height'
      />
      <input
        type="number"
        name='age'
        value={props.state.age}
        onChange={props.changeHandler}
        placeholder='Smurf age'
      />
      <button type='submit' children={props.card ? 'Update Smurf': 'Add Smurf'}>
    
      </button>
    </StyledForm>
  );
}

export default Form