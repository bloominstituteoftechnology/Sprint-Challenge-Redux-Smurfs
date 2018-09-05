import React from 'react';

import './SmurfsList.css';
import Smurf from './Smurf';


const SmurfsList = props => {

    return (
        <div className="list-container">

            {props.smurfs.map(smurf => 
                <div key={smurf.name + smurf.id}>
                    <Smurf smurf={smurf}/>
                </div>)}
                
        </div>
    )
}
 

export default SmurfsList;
