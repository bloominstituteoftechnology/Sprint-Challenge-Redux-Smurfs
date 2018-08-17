import React from 'react';
import Smurf from './Smurf';

const SmurfList =(props) => {
    return (
        <div>
            {props.smurfs.map((smurf, index) => {
                return (
                    <div key={index}><Smurf smurf={smurf} /></div>
                )
            })}
        </div>
    )
}
export default SmurfList;
