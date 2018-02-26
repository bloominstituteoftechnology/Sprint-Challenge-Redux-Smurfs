import React from 'react';
import { editSmurf } from '../actions';
import { connect } from 'react-redux';

const EditSmurfForm = props => {
    return (
        <form>
            <input placeholder={props.smurf.name}/>
            <input placeholder={props.smurf.age}/>
            <input placeholder={props.smurf.height}/>
        </form>
    )
}

export default EditSmurfForm;