import React from 'react';

const Smurf = props => {
    return (
        <div>
            <p>Name: {props.smurf.name}</p>
            <p> Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height} tall.</p>
        </div>
    )
}

export default Smurf;