import React from 'react';
import Smurf from './Smurf';

// export default function SmurfList (props) {
//     return(
//         props.smurfs.map(smurf => {
//         let smurfedId = 0;
//         smurf.id = smurfedId++;  
//         return <Smurf key={smurf.id} smurf={smurf}/>  
        
//         })
//     );
// }

export default function SmurfList (props) {
    return(
        props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>  
        )
    );
}