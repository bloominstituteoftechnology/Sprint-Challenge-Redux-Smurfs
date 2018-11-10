import React from 'react'




const Smurf = ({smurf}) => {
    return (
        <div key={smurf.id} className='smurf-card'>
            <h2>{smurf.name}</h2>
        </div>
    )
}



export default Smurf