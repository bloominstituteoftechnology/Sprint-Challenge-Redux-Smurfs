import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
    return(
        <div>
             {props.smurfies.map(smurf=>{
            return(<Smurf smurf={smurf}></Smurf>)})}

        </div>
    )
}

export default SmurfList;