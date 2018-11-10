import React from 'react'
import { smurfin } from '../reducers/smurfin';

 const Smurf = props => {
     return (
        <div key = {smurfin.id} className='smurf-card'>
            <h2> {smurfin.name} </h2>
        </div>
    )
}

 export default Smurf 