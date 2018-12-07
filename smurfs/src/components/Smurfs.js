import React from "react";
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import '../components/App.css';

const Smurfs = props => {
  return (
    <div className="smurfs-cards ">
        {props.smurfs.map(smurf => {
        return <Smurf key={smurf.name} smurf={smurf} deleteSmurf={props.deleteSmurf}/>;
        })}
        <SmurfForm addSmurf={props.addSmurf}/>
    </div>
  );
};

export default Smurfs;
