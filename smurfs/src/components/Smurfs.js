import React from 'react';
import Smurf from './Smurf.js'

const Smurfs = props => {
    return (
        <div>
            {props.smurfs.map(smurf => {
                return (
                    <div><Smurf smurf={smurf} key={smurf.id} /></div>
                );
            })}
        </div>
    );
}

export default Smurfs;