import React from 'react' 
import Smurf from './Smurf';

function Smurfs (props){
    return (
        <div>
            {props.smurfs.map(smurf => <Smurf key={smurf.id} {...smurf} deleteSmurf={props.deleteSmurf} update={props.update}/>)}
        </div>
    )
}

export default Smurfs