import React from 'react';
import Smurf from './Smurf';
import './smurfscontainer.css'

export default function SmurfList (props) {
    return(
        <div className="smurfslist">
        {props.smurfs.map((smurf, index) => <Smurf 
            smurfid={index} 
            key={smurf.id} 
            smurf={smurf}/>)}      
        </div>
    );
}

// export default function SmurfList (props) {
//     return(
//         props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>  
//         )
//     );
// }