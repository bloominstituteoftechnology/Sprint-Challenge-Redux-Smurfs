import React from 'react';
import './smurf.css'

const Smurf = (props) => {
    return(
    <div className="small-width">
        <div className="flex">
        <h1>{props.smurf.name}</h1>
        </div>
        <div className="flex">
        <h4>{props.smurf.height} inches tall</h4> <h4>{props.smurf.age} years old</h4>
        </div>
    </div>
    )
}

export default Smurf