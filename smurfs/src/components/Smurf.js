import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/index';

const Smurf = props => {

    const clickHandler = () => {
        props.deleteSmurf(props.smurf.id)
    }

    return (
        <div>
            <div>{props.smurf.name}</div>
            <div>{props.smurf.age}</div>
            <div>{props.smurf.height}</div>
            <button onClick={clickHandler}>X</button>
        </div>
    )
}

const mstp = state => {
    return {}
}

export default connect(mstp, { deleteSmurf })(Smurf);