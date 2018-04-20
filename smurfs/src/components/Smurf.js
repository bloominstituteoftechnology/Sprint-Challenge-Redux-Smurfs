import React from 'react';
import { connect } from 'react-redux';
import {deleteSmurf} from '../actions';

const Smurf = props => {
    return (
        <div>
            <p>Smurf Name: {props.smurf.name}</p>
            <p>Smurf Age: {props.smurf.age}</p>
            <p>Smurf Height: {props.smurf.height}</p>
            <button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete Le Smurf</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        deletingSmurf: state.deletingSmurf,
    }
}

export default connect(mapStateToProps, {deleteSmurf})(Smurf);