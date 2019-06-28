import React from 'react';


const SmurfsList = props => {
   
    
    console.log(props.smurfs.id, 'sl')
    return (
        <div>
            <div>
            {props.smurfs.map(smurf => 
            <div key={smurf.id}>
                <p>Name: {smurf.name}</p>
                <p>Age:{smurf.age}</p>
                <p>Height: {smurf.height}</p>
            </div>)}
            </div>
            <div>

            </div>
        </div>
    );
}

export default SmurfsList