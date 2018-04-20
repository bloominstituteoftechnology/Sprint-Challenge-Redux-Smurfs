import React from 'react';

export default props => {
    return (
        <div>
            <p>Smurf Name: {props.smurf.name}</p>
            <p>Smurf Age: {props.smurf.age}</p>
            <p>Smurf Height: {props.smurf.height}</p>
        </div>
    );
};