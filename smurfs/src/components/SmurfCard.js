import React from 'react';

const SmurfCard = props => {
  console.log(props.smurf, 'in smurf card')
  return (
    <div className='smurf-card'>
      <h3>{props.smurf.name}</h3>
      <div>{props.smurf.age}</div>
      <div>{props.smurf.height}</div>
    </div>
  )
}

export default SmurfCard;