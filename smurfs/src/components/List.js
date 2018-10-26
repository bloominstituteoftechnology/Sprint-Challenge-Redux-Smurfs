import React from 'react'
import Fragment from 'react'
import Smurf from './Smurf'

export default function List(props) {
    return (
        <Fragment>
            {props.smurfs.map(smurf = (
                <Smurf 
                    smurf={smurf}
                />
            ))}
        </Fragment>
    )
}