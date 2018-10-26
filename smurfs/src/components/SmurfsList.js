import React from 'react';

const SmurfsList = props => {
    return props.smurfs.map((smurf, index) => (
            <div key={index}>
            <h2>{smurf.name}</h2>
            <h3>{smurf.age}</h3>
            <h3>{smurf.height}</h3>
            </div>
        ))
};
export default SmurfsList;