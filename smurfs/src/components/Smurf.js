import React from 'react'
import {
  SmurfContainer,
  SmurfText,
  SmurfName,
  RemoveSmurf
} from '../styles/Smurf'

const Smurf = ({ id, name, age, height, deleteSmurf }) => (
  <SmurfContainer>
    <SmurfName to={`/smurf/${id}`}>{name}</SmurfName>
    <SmurfText>id: {id}</SmurfText>
    <SmurfText>age: {age}</SmurfText>
    <SmurfText>height: {height}</SmurfText>
    <RemoveSmurf onClick={() => deleteSmurf(id)}>x</RemoveSmurf>
  </SmurfContainer>
)

Smurf.defaultProps = {
  name: '',
  age: '',
  height: ''
}

export default Smurf
