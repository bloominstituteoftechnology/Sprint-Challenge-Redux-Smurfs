import React from 'react';
import Smurf from './Smurf';

const Smurfs = props => {
    return (
        <div className='smurfs-container'>
            {props.smurfs.map((smurf, index) => <Smurf key={index} smurf={smurf} />)}
        </div>
    );
}

export default Smurfs;