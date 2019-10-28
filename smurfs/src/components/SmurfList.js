import React from 'react'
import Smurf from './Smurf'

const SmurfList = props => {
    return (
        <ul>
            {props.smurfs.characters.map(smurf => {
                return <Smurf key={smurf.name} smurf={smurf} />
            })}
            {console.log(props)}
        </ul>
    )
}

export default SmurfList