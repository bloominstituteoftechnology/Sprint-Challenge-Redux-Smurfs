import React from 'react';

const Smurfs = props => {
    return (
        props.smurfs.map((smurf) => <div key={ smurf.id }>{smurf.name}</div>)
    );
}

export default Smurfs;
