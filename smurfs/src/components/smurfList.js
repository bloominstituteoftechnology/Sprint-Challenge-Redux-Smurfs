import React from 'react';

const SmurfList = props => {
    console.log("SMURFLIST PROPS :",props.smurfs)
    return(
        <div>
            <h1>Hello Smurfs!!</h1>
            {props.smurfs.map((smurf,index) => {
                return (
                    <div key={index} className="smurf-card">
                        <h2>{smurf.name}</h2>
                        <h4>{smurf.age} Years Old</h4>
                        <h4>{smurf.height}</h4>
                    </div>
                ) 
            })}
        </div>
    )
}

export default SmurfList;

