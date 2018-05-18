import React, { Component } from 'react';



const SmurfList = props => {
    return (
        <div>
            {props.smurfs.map(smurf => 
                <p key={smurf.name + smurf.id}>
                    {smurf.name} {smurf.age} {smurf.height}

                </p>
            )}
        </div>
    )
}
export default SmurfList;