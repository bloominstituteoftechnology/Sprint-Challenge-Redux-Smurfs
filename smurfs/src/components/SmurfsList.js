import React from 'react';
import Smurf from './Smurf';


const SmurfsList = props => {
    return(
        <div className="smurf-list">
            {props.smurfs.map((smurf, index) => {
                return <Smurf id={smurf.id} smurf={smurf} key={index} />
            })}
        </div>
    )
}

export default SmurfsList;