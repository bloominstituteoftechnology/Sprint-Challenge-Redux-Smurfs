import React from 'react'
import {
  SmurfContainer,
  SmurfText,
  SmurfName,
  RemoveSmurf
} from '../styles/Smurf'

const Smurf = ({ id, name, age, height, removeSmurf }) => (
  <SmurfContainer>
    <SmurfName to={`/smurf/${id}`}>{name}</SmurfName>
    <SmurfText>age: {age}</SmurfText>
    <SmurfText>height: {height}</SmurfText>
    <RemoveSmurf onClick={() => removeSmurf(id)}>x</RemoveSmurf>
  </SmurfContainer>
)

Smurf.defaultProps = {
  name: '',
  age: '',
  height: ''
}

export default Smurf
