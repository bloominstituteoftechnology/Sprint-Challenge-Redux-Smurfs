import React from 'react';
import Smurf from './Smurf';

export default function SmurfList (props) {
    return(
        props.smurfs.map(smurf => <Smurf key={smurf.id} friend={smurf}/>)
    );
}
