import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
    return ( 
        props.smurfs.map(smurf => {
            return (
                <div key={smurf.id}>
                    <Smurf smurf={smurf} />
                </div>
            )
        })
     );
}
 
export default SmurfList;