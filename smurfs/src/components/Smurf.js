import React from 'react';
import smurfReducer from '../reducers';

const Smurf = props => {
    return (
        <p>{props.smurf.name}</p>
    );
}
 
export default Smurf;