import React from 'react'
import {
  SmurfContainer,
  SmurfText,
  SmurfName,
  RemoveSmurf
} from '../styles/Smurf'

const SmurfStatic = ({
  id,
  name,
  age,
  height,
  deleteSmurf,
  toggleEditMode
}) => (
  <SmurfContainer>
    <SmurfName to={`/smurf/${id}`}>{name}</SmurfName>
    <SmurfText>age: {age}</SmurfText>
    <SmurfText>height: {height}</SmurfText>
    <RemoveSmurf onClick={() => deleteSmurf(id)}>x</RemoveSmurf>
    <button onClick={toggleEditMode}>Edit smurf</button>
  </SmurfContainer>
)

export default SmurfStatic
