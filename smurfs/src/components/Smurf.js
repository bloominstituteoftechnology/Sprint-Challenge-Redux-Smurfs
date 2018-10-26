import React from 'react'
import Fragment from 'react'

export default function Smurf(props) {
    return (
        <Fragment>
            <h1>Name:</h1>
                <h4>{props.smurf.name}</h4>
            <h1>Age:</h1>
                <h4>{props.smurf.age}</h4>
            <h1>Height:</h1>
                <h4>{props.smurf.height}</h4>
        </Fragment>
    )
}