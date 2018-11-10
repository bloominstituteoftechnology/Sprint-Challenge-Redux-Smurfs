import React from 'react'
import { smurfReducer } from '../reducers/smurfReducer';

const Smurf = ({smurf}) => {

    return (
        <div className='smurf-card'>
        {smurf.name}
        </div>
    )
}

export default Smurf