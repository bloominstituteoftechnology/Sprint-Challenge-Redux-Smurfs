import React from 'react';

const Smurf = ({smurf}) => {


    return (
        <div key={smurf.age} className='smurf-card'>
            <h2>{smurf.name}</h2>
            <h2>{smurf.age}</h2>
            <h2>{smurf.height}</h2>
        </div>
    )
}

export default Smurf