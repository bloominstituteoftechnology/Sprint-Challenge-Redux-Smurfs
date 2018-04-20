import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';
const Smurf = props => {
    return (
        <div>
        <p> Name: {props.smurf.name}</p>
        <p> Age: {props.smurf.age}</p>
        <p> Height: {props.smurf.height}</p>
        <button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete Smurf</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        deletingSmurf: state.deletingSmurf,
    }
}

export default connect(mapStateToProps, {deleteSmurf})(Smurf);