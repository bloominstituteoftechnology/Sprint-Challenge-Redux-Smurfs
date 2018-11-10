import React from 'react';

const Smurf = props => {
    return (
        <div>
            <p>{props.smurf.name} is {props.smurf.age} years old and is {props.smurf.height} tall.</p>
        </div>
    )
}

export default Smurf;