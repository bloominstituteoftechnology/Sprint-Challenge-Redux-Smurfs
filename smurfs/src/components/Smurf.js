import React from 'react';

const Smurf = (props) => {
    return (
        <div className="smurfCard">
            <h3>Smurf: {props.smurf.name} </h3>
            <p>Age: {props.smurf.age} smurfs old</p>
            <p>Height: {props.smurf.height} </p> 
            <p>ID: {props.smurf.id} </p>
        </div>
    )
}

export default Smurf;