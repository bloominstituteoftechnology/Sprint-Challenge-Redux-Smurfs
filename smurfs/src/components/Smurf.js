import React from 'react';

const Smurf = props => {
    return(
        <div className='smurf'>
            <h1>{props.smurf.name}</h1>
            <p>{props.smurf.age} smurf years old</p>
            <p>{props.smurf.height} tall</p>
        </div>
    )
}

export default Smurf;