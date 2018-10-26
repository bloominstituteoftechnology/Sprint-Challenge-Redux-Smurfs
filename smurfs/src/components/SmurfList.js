import React from 'react';

const SmurfList = props => {
    console.log('props', props);
    return (<div>{
        props.smurfs.map(smurf => <div>{smurf.name}</div>)
    }</div>);
}

export default SmurfList;