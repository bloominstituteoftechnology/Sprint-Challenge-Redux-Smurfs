import React from 'react';
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions'

const Smurf = props => {

    const clickHandler = e => {
        e.preventDefault();
        props.deleteSmurf(props.smurf.id);
      }

    return (
        <div key={props.smurf.id} className="smurf-card">
            <h1>Name: {props.smurf.name}</h1> 
            <span className='delete-button' onClick={clickHandler}>delete</span>
            <h2>Age: {props.smurf.age}</h2>
            <h2>Height: {props.smurf.height}</h2>
            <h3>ID: {props.smurf.id}</h3>
        </div>
    )
}

export default connect(() => ({}), { deleteSmurf })(Smurf);