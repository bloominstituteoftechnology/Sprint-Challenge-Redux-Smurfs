import React from 'react';

const Smurf = props => {
    return (
        <div className="smurf-item">
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    );
};

export default Smurf;