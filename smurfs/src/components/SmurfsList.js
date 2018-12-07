import React from 'react';
import Smurf from './Smurf';
const SmurfsList = props => {
    return (
        <ul>
            {props.smurfs.map(smurf => (
                <Smurf smurf={smurf} />
            ))}
        </ul>
    );
};

export default SmurfsList;
