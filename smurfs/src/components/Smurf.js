import React from 'react';


const Smurf = props => {
    return(
        <div className='smurf'>
            {/* Name */}
            <h2 className='smurf_detail'>Name:</h2>
            <h2 className='smurf_name'>{props.name}</h2>
            {/* age */}
            <h2 className='smurf_age'>Age:</h2>
            <h2 className='smurf_age'>{props.age}</h2> 
            {/* Height */}
            <h2 className='smurf_height'>Height:</h2>
            <h2 className='smurf_height'>{props.height}</h2>
            <button onClick={ () => props(props.id)}>    </button>
        </div>

    )
}

export default Smurf;