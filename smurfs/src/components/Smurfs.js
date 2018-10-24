import React from 'react';
import Smurf from './Smurf';

const Smurfs = props => {
    return (
        <div className="Smurfs">
            <ul>
                {props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} deleteHandler={props.deleteHandler} />)}
            </ul>
        </div>
        );
}

export default Smurfs;