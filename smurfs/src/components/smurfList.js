import React from 'react';

const SmurfList = (props) => {
    if (!props.length) {
        return 'Oh Snap! All the Smurfs are Gone!';
    }
    return (
        <ul>
            {props.smurfs.map((smurf, i) => {
                return <li key={i}>{smurf.name}</li>
            })}
        </ul>
    )
}

export default SmurfList;