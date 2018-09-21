import React from 'react';
import Smurf from './Smurf';

const SmurfList = (props) => {
    return (
        <div>
            
            <ul>
            {props.smurfs.map(smurf => {
              return <Smurf {...smurf} key = {smurf.id} />
            })}

          </ul>

        </div>
    )
}

export default SmurfList;