import React from 'react'
import { updateSmurf, toggleForm, deleteSmurf } from './../actions';
import { connect } from 'react-redux';
import UpdateSmurf from './UpdateSmurf';

const Smurf = props => {
    return (
        <div>
       <h2> {props.smurf.name} </h2>
       <p>{props.smurf.age}</p>
       <p>{props.smurf.height}</p>
       {props.showForm === true ? <UpdateSmurf /> : null}
       <button onClick={() => props.toggleForm()}>Edit</button>
       <button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs.smurfs,
        showForm: state.toggleReducer.showForm
    }
}

const mapActionsToProps = {
    updateSmurf: updateSmurf,
    toggleForm: toggleForm,
    deleteSmurf: deleteSmurf
}

export default connect(mapStateToProps, mapActionsToProps)(Smurf);