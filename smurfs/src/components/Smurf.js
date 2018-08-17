import React from 'react';

export default function Smurf(props){
    return(
        <div>
            <p>Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age} Smurf Years Old</p>
            <p>Height: {props.smurf.height} cm</p>
        </div>
    )
};
