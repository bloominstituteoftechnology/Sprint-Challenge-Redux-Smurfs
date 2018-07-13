import React from 'react'
import { updateSmurf, toggleForm, deleteSmurf } from './../actions';
import { connect } from 'react-redux';
import UpdateSingleSmurf from './UpdateSmurf';

const Smurf = props => {
    return (
        <div>
       <h2> {props.smurf.name} </h2>
       <p>{props.smurf.age}</p>
       <p>{props.smurf.height}</p>
       {console.log(props.smurfs[props.smurf.id])}
       <UpdateSingleSmurf id={props.smurfs[props.smurf.id-1].id}/>
       {props.showForm ? <UpdateSingleSmurf /> : null}
       <button onClick={() => props.toggleForm()}>Edit</button>
       <button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete</button>
       
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs.smurfs,
        showForm: state.showForm
    }
}

const mapActionsToProps = {
    updateSmurf: updateSmurf,
    toggleForm: toggleForm,
    deleteSmurf: deleteSmurf
}

export default connect(mapStateToProps, mapActionsToProps)(Smurf);