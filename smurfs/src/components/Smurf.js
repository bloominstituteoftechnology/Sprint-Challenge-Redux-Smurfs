import React from 'react'

function Smurf(props) {
    return (
        <>
        <div className="smurf_and_buttons">
        <div className="smurf">
            <span>Name: {props.smurf.name}</span>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
        <div className="buttons">
            <button onClick = {() => props.update(props.smurf)}>Update</button>
            <button onClick = {() => props.delete(props.smurf)}>Delete</button>
        </div>
        </div>
        <hr></hr>
        </>
    )
}

export default Smurf
