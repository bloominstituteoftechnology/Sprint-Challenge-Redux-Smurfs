import React from 'react';

const Smurf = props => {
  return (
    <div className='smurf-container'>
    <div className='smurf-buttons'>
    <div className='edit-button button'>Edit</div>
    <div className='delete-button button'>Delete</div>
    </div>
    <div className='smurf-card'>
    <h3>{props.smurf.name}</h3>
    <p>{props.smurf.age}</p>
    <p>{props.smurf.height}</p>
    </div>
    </div>
  )
}

export default Smurf; 
