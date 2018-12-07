import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf } from '../actions';

const Smurf = props => {
    return (
        <div>
            <h2>{props.smurf.name}</h2>
            <h3>Age: {props.smurf.age}</h3>
            <h3>Height: {props.smurf.height} cm</h3>
            <button onClick={() => {props.deleteSmurf(props.smurf.id)}}>Delete</button>
        </div>
    )
}

export default connect(null, { deleteSmurf })(Smurf);