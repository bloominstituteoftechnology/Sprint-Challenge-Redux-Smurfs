import React from 'react';

const Smurf = props => {
    return (
        <div key={props.smurf.id} className="smurf-card">
            <h1>Name: {props.smurf.name}</h1>
            <h2>Age: {props.smurf.age}</h2>
            <h2>Height: {props.smurf.height}</h2>
            <h3>ID: {props.smurf.id}</h3>
        </div>
    )
}

export default Smurf;