import React from 'react';
import Smurf from './Smurf';
import shortid from 'shortid';
const SmurfsList = props => {
    return (
        <ul>
            {props.smurfs.map(smurf => (
                <Smurf key={shortid.generate()} smurf={smurf} />
            ))}
        </ul>
    );
};

export default SmurfsList;
