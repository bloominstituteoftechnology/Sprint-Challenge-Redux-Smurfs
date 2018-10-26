import React from 'react'
import { Fragment } from 'react'

export default function Smurf(props) {
    return (
        <Fragment>
            <hr></hr>
            <h3>Name:</h3>
                <p>{props.smurf.name}</p>
            <h3>Age:</h3>
                <p>{props.smurf.age}</p>
            <h3>Height:</h3>
                <p>{props.smurf.height}</p>
        </Fragment>
    )
}