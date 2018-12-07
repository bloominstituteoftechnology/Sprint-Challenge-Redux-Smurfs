import React from 'react';
import FormSmurf from './FormSmurf'

const SmurfCard = props => {
  console.log(props.deleteSmurf, 'in smurf card')
  return (
    <div className='smurf-card'>
      <h3>{props.smurf.name}</h3>
      <div>{props.smurf.age}</div>
      <div>{props.smurf.height}</div>
      <button onClick={() => props.deleteSmurf(props.smurf.id)}>destory</button>
      <FormSmurf style={{display: 'hidden'}}/>
      <button onClick={() => props.updateSmurf(props.smurf.id)}>update</button>
    </div>
  )
}

export default SmurfCard;