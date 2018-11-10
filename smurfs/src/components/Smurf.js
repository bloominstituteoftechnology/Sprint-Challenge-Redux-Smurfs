import React from 'react';
import { smurfReducer } from '../reducers';

const Smurf = props => {
    return (
        <div className ='smurfz' key={smurfReducer.id}>
            <h3>{smurfReducer.name}</h3>
        </div>
    )
}

export default Smurf;