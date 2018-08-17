import React from 'react';
import Smurf from './Smurf';

export default function SmurfList (props) {
    return(
        props.smurfs.map((smurf, index) => <Smurf smurfid={index} key={smurf.id} smurf={smurf}/>  
        
        )
    );
}

// export default function SmurfList (props) {
//     return(
//         props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>  
//         )
//     );
// }