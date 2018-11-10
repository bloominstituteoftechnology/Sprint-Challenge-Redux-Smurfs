import React from 'react';

const Smurf = ({smurf}) => {
    return (
        <div key={smurf.id} className='smurf-card'>
            <h2>{smurf.name}</h2>
            <h4>Age: {smurf.age} Height: {smurf.height}</h4>
        </div>
    )
}

export default Smurf;