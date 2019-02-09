import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf, editForm } from '../actions';

const Smurf = props => {
    return (
        <div className="smurf-card">
        
            <div className="card-detail">
                <h2> <bold>name</bold> {props.smurf.name}</h2>
            </div>
            <div className="card-detail">
                <h3> <bold>age</bold> {props.smurf.age}</h3>
            </div>
            <div className="card-detail">
                <h4> <bold>height</bold> {props.smurf.height}</h4>
            </div>
            <button variant="warning" onClick={() => props.editForm(props.smurf)}>
                Edit
            </button>
            <button variant="danger" onClick={() => props.deleteSmurf(props.smurf.id)}>
                Delete
            </button>    
            
        </div>
            
    )
}


export default connect(null, {deleteSmurf, editForm} )(Smurf);