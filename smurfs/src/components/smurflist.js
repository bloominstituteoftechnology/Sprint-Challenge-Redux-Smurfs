import React from 'react';

const SmurfList = (props) => {
    return (  
        <div className="smurf-container">
            {props.smurfs.map(smurf => {
                return (
                    <div>
                        <h3>Name: {smurf.name}</h3>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </div>                
                )
            })}
        </div>
    );
}
 
export default SmurfList;