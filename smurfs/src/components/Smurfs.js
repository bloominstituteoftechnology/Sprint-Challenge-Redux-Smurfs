import React from 'react';

const Smurfs = props => {
    return (
    <ul>
        {props.smurfs.map(smurf => { 
        return(
        <li key={props.name}>
        <h3>{smurf.name}</h3>
        <p>{smurf.height}</p>
        <p>{smurf.age} years old</p>
        </li>
        )
    })}
    </ul>
    )
}

export default Smurfs;