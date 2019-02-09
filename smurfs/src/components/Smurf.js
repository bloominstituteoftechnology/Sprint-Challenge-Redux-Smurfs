import React from 'react'
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions'

const Smurf = props => {

    const handleClick = () => {
        props.deleteSmurf(props.id)
    }

    return (
        <div>
            <h3>
                {props.smurf.name} {props.smurf.age} {props.smurf.height}
            </h3>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default connect(null, { deleteSmurf })(Smurf)