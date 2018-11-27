import React from 'react';


const Smurf = props => {
    return(
        <div>
            <h3>{props.smurf.name}</h3>
            <strong>{props.smurf.height} tall</strong>
            <p>{props.smurf.age}</p>

        </div>
    )
}


export default Smurf;