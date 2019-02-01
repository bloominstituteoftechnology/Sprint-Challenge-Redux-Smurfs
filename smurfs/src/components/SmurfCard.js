import React from 'react';
import FormSmurf from './FormSmurf'

const SmurfCard = props => {
  console.log(props.deleteSmurf, 'in smurf card')
  return (
    <div className='smurf-card'>
      <h3>{props.smurf.name}</h3>
      <div>Age: {props.smurf.age}</div>
      <div>Height: {props.smurf.height}</div>
      <button onClick={() => props.deleteSmurf(props.smurf.id)}>destory</button>
      {/* <FormSmurf style={{display: 'hidden'}}/> */}
      <button onClick={() => props.updateSmurf(props.smurf)}>update</button>
    </div>
  )
}

export default SmurfCard;