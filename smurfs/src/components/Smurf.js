import React from 'react'

function Smurf(props) {
    return (
        <div className="smurf">
            Name: {props.smurf.name}
            Age: {props.smurf.age}
            Height: {props.smurf.height}
            <button onClick = {() => props.update(props.smurf)}>Update</button>
            <button onClick = {() => props.delete(props.smurf)}>Delete</button>
        </div>
    )
}

export default Smurf
