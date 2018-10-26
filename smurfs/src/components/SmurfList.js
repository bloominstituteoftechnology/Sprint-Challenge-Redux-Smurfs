import React from 'react';

import Smurf from './Smurf';

export default function SmurfList(props) {
    return (
        <div className="smurfsContainer">
        {props.smurfs.map((smurf, index) => (
            <Smurf key={index} smurf={smurf}/>
        ))}
        </div>
    )
}