import React from 'react';

const Smurfs = props => {
    return (
    <ul>
        {props.smurfs.map(smurf => { 
        return(
        <li key={props.name}>
        <h3>{props.name}</h3>
        <p>{props.height}</p>
        <p>{props.age} years old</p>
        </li>
        )
    })}
    </ul>
    )
}

export default Smurfs;