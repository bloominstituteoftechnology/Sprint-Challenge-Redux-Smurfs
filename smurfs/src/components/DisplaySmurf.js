import React from 'react';

const DisplaySmurf = props=>{
    return(
        <div>
            <p>{props.smurf.name}</p>
            <p>{props.smurf.age} years old</p>
            <p>{props.smurf.height}cm tall</p>
        </div>
    )
}

export default DisplaySmurf;