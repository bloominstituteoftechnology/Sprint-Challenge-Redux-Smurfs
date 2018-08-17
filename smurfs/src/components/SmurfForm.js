import React from 'react';

const SmurfForm = (props) => {
    return (
        <div className="smurf-form">
            <form onSubmit={props.handleSubmit} >
                <input type="text" name="newName" onChange={props.handleChange} value={props.newName} />
                <input type="number" name="newAge" onChange={props.handleChange} value={props.newAge} />
                <input type="text" name="newHeight" onChange={props.handleChange} value={props.newHeight} />
                <button>Add Smurf</button>
            </form>
        </div>
    )
}

export default SmurfForm;