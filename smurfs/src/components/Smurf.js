import React from 'react'
import { connect } from 'react-redux'

const Smurf = props => {

    return (
        <div>
            <h3>
                {props.smurf.name} {props.smurf.age} {props.smurf.height}
            </h3>
        </div>
    )
}

export default connect(null, {})(Smurf)