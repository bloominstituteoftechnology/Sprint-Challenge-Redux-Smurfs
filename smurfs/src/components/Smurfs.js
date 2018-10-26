import React from "react";

const Smurfs = props => {
    return (
        <ul>
            {props.smurfs.map(smurf => {
                return <li key={smurf.id}>{smurf.name} - {smurf.age} - {smurf.height}</li>
            })}
        </ul>)
}

export default Smurfs;