import React from 'react';

export default function Smurf(props) {
    return (
        <div className="smurf-card">
        <h1>{props.smurf.name}</h1>
        <h2>{props.smurf.age}</h2>
        <h3>{props.smurf.height}</h3>
        </div>
    )
}