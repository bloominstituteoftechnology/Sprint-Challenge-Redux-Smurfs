import React from 'react';

const SmurfForm = (props) => {
    return (
        <div className="smurf-form">
            <h3>Update {props.updatedName} </h3>
            <form onSubmit={props.updateSmurf} >
                <input type="text" name="updatedName" onChange={props.handleChange} value={props.updatedName} />
                <input type="number" name="updatedAge" onChange={props.handleChange} value={props.updatedAge} />
                <input type="text" name="updatedHeight" onChange={props.handleChange} value={props.updatedHeight} />
                <button>Update</button>
                <button type="button" onClick={props.cancelUpdate}>Cancel</button>
            </form>
        </div>
    )
}

export default SmurfForm;