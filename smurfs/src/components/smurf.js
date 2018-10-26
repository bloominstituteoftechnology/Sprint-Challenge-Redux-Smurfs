
//-- Dependencies --------------------------------
import React from "react";

//-- Smurf - Implementation & Export -------------
export default function Smurf(props) {
    return (
        <div className='smurf' onClick={props.onClick} data-id={props.smurf.id}>
            <span>Name: {props.smurf.name}</span>
            <span>Age: {props.smurf.age}</span>
            <span>Height: {props.smurf.height}</span>
        </div>
    );
}
