import React from 'react'

import { connect } from 'react-redux'
import { deleteSmurf } from '../actions'

const SmurfPage = props => {
    const id = props.smurf.id;

    const handleDelete = event => {
        event.preventDefault();
        props.deleteSmurf(id)
    }


    return (
        <div className="smurf-card" key={props.smurf.id}>
            <h3>Name: {props.smurf.name} </h3>
            <p> Age: {props.smurf.age} </p>
            <p> Height: {props.smurf.height} </p>
            <p> ID: {props.smurf.id} </p>
            <div style={{cursor: "pointer"}} onClick={handleDelete}> Delete </div>
        </div>
    )
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, { deleteSmurf })(SmurfPage)
//export default SmurfPage