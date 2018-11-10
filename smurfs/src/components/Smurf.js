import React from 'react';

const Smurf = (props) =>{
    return(
        <div className = 'smurf-container'>
            <h2>{props.smurf.name}</h2>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </div>
    )
}

export default Smurf