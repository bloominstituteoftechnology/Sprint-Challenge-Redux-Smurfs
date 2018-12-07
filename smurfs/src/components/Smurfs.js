import React from "react";
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

const Smurfs = props => {
  return (
    <div>
        {props.smurfs.map(smurf => {
        return <Smurf key={smurf.name} smurf={smurf} />;
        })}
        <SmurfForm addSmurf={props.addSmurf}/>
    </div>
  );
};

export default Smurfs;
