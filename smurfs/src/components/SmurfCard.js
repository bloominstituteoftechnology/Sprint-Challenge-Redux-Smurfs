import React from 'react';
import {connect} from 'react-redux';

import {deleteSmurf} from '../actions/index';

const SmurfCard = props => {
    const callDeleteSmurf = e => {
        e.preventDefault();
        props.deleteSmurf(props.smurf.id);
    }

    // Added an id to Brainey in the server to fix him.
    return (
        <div className='smurf-card'>
            <button onClick={callDeleteSmurf}>Delete</button>
            <div>Name:{props.smurf.name}</div>
            <div>Age: {props.smurf.age}</div>
            <div>Height: {props.smurf.height}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {deleteSmurf})(SmurfCard);