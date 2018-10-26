import React from 'react';

const SmurfList = props => {
    console.log("SMURFLIST PROPS :",props.smurfs)
    return(
        <div>
            <h1>Hello Smurfs!!</h1>
            {props.smurfs.map(smurf => {
                console.log("CURRENT SMURF" ,smurf)
                return <h1>{smurf.name} : "brainy" </h1> 
            })}
        </div>
    )
}

export default SmurfList;