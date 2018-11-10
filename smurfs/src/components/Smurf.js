import React from 'react';
import UpdateSmurf from './UpdateSmurf.js';

const Smurf = props => {
    return (
        <div>
            <p>{props.smurf.name} is {props.smurf.age} years old and is {props.smurf.height} tall.</p>
            <UpdateSmurf smurf={props.smurf}/>
        </div>
    )
}

export default Smurf;