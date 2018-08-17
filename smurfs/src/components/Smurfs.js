import React from 'react' 
import Smurf from './Smurf';

function Smurfs (props){
    return (
        <div>
            {props.smurfs.map(smurf => <Smurf key={smurf.id} {...smurf} />)}
        </div>
    )
}

export default Smurfs