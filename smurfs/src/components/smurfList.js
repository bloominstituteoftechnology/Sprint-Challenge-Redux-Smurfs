import React from 'react';

const SmurfList = (props) => {
    if (!props.length) {
        return 'Oh Snap! Where are all of the Smurfs!';
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