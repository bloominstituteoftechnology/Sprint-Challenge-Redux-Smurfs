import React from 'react';

import Smurf from './Smurf';

const SmurfList = props => {
    return(
        <div class='smurf-conatiner'>
            <h1>Smurf List</h1>
            {props.smurfs.map((s, i) => <Smurf smurf={s} key={i}/>)}
        </div>
    )
}

export default SmurfList;