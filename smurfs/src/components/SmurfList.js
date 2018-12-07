import React from 'react';

import SmurfCard from './SmurfCard';

export default function SmurfList(props) {
    return (
        <div>
            {props.smurfs.map(smurf => 
            <SmurfCard 
                smurf={smurf}
                deleteSmurf={props.deleteSmurf}
            />)}
        </div>
    );
}