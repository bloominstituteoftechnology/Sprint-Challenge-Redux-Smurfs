import React from 'react';

const Smurf = props => {
    return (
        <div>
            <h2>{props.smurf.name}</h2>
            <h3>Age: {props.smurf.age}</h3>
            <h3>Height: {props.smurf.height} cm</h3>
        </div>
    )
}

export default Smurf;