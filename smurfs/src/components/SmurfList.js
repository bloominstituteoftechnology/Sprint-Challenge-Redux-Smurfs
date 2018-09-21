import React from 'react';
import Smurf from './Smurf';

const SmurfList = (props) => {
  return (
    <div>
      <h1>Here be your Smurfs:</h1>
      {props.smurfs.map((smurf) => {
        return (
          <Smurf
            Smurf={smurf}
            //Below, you're setting a prop of the Friend component for updateForm. This allows the click handler to know which updateForm is associated with which friend, based on which friend you click. Otherwise, it wouldn't know which friend object to update.
            // updateForm={props.updateForm}
            key={smurf.id}
          />
        );
      })}
    </div>
  );
};
export default SmurfList;