import React from 'react';
import {connect} from 'react-redux';

const SmurfCard = props => {
    const callDeleteSmurf = e => {
        e.preventDefault();
        
    }
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
export default connect(mapStateToProps)(SmurfCard);