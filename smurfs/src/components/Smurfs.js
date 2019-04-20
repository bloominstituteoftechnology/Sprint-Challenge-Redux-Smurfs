import React from 'react';
import Smurf from './Smurf';

const Smurfs = props => {
    return(
        <div className="smurfs">
            {props.smurfs.map((smurf, index) => {
                return <Smurf index={index} key={smurf.id} smurf={smurf} />
            })}
        </div>
    );
}
export default Smurfs;
