import React from 'react';

const Smurf = props => {
  return (
    <li className='smurf'>
      <div>ID: {props.smurf.id}</div>
      <div>Name: {props.smurf.name}</div> 
      <div>Age: {props.smurf.age}</div>
      <div>Height: {props.smurf.height}</div>
    </li>
  )
};

export default Smurf;