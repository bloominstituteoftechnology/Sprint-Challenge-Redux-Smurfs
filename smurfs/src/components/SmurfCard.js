import React from 'react';

import './SmurfCard.css';

export const SmurfCard = props => {
  return ( // Take data from props to display smurf
    <div className="smurfCard">
      <div className="smurfCard_info">
        <div>{props.smurf.name} is</div>
        <div>{props.smurf.age} smurf years old</div>
        <div>and {props.smurf.height} tall!</div>
      </div>
      <div className="smurfCard_buttons">
        <button onClick={() => 
          props.deleteSmurf( props.smurf.id )
        }>Remove Smurf</button>
        <button onClick={() => {
          props.updateSmurf( props.smurf.id, props.formInput );
          props.resetInputForm();
        }}>Update Smurf</button>
      </div>
    </div>
  )
}