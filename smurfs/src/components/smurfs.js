

//== Smurfs ====================================================================

//-- Dependencies --------------------------------
import React from 'react';
import SmurfList from './smurf-list.js';
import SmurfForm from './smurf-form.js';
import Error from './error.js';

//-- Component -----------------------------------
export default function Smurfs(props) {
    return (
        <div className="smurfs">
            <h1>`SMURFS! 2.0 W/ Redux</h1>
            <SmurfForm />
            <Error />
            <SmurfList />
        </div>
    );
}
