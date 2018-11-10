import React from 'react'

const SmurfPage = props => {

    return (
        <div className="smurf-card" key={props.smurf.id}>
            <h3>Name: {props.smurf.name} </h3>
            <p> Age: {props.smurf.age} </p>
            <p> Height: {props.smurf.height} </p>
            <p> ID: {props.smurf.id} </p>
        </div>
    )
}

export default SmurfPage