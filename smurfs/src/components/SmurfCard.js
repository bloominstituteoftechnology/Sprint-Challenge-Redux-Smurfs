import React from 'react';

export const SmurfCard = props => {
  return ( // Take data from props to display smurf
    <div className="smurfCard">
      <div className="smurfCard_info">
        <div>{props.smurf.name} is</div>
        <div>{props.smurf.age} years old</div>
        <div>and {props.smurf.height} inches tall!</div>
      </div>
    </div>
  )
}