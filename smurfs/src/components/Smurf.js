import React from 'react';
import UpdateSmurf from './UpdateSmurf.js';
import { connect } from 'react-redux';

import { deleteSmurf } from '../actions/index.js';

const Smurf = props => {
    const deleteClickHandler = (e) => {
        e.preventDefault();
        props.deleteSmurf(props.smurf.id);
    }

    return (
        <div>
            <p>{props.smurf.name} is {props.smurf.age} years old and is {props.smurf.height} tall.</p>
            <UpdateSmurf smurf={props.smurf}/>
            <button onClick={deleteClickHandler}>Delete Smurf!</button>
        </div>
    )
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { deleteSmurf })(Smurf);