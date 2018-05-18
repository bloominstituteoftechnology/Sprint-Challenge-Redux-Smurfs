import React from 'react'
import { submit } from 'redux-form'
import { connect } from 'react-redux'

const Smurf = (props) => {
    console.log("props", props)
    let id = props.id;
    console.log("values", props.values)
    return (
        <div className="smurf" key={props.id}>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.height}</p>
            <button onClick={() => props.deleted(props.id)} > Delete </button>
            <button onClick={() => props.updated(props.values, props.id)}>Update </button>
        </div >
    );
}

export default Smurf