import React from 'react';

const UpdateSmurf = (props) => {
    return (
        <div className="smurf-form update-form">
            <h2>Update {props.updatedName} </h2>
            <form onSubmit={props.updateSmurf} >
                <input 
                    type="text" 
                    name="updatedName" 
                    placeholder="Update name"
                    onChange={props.handleChange} 
                    value={props.updatedName} 
                />
                <input 
                    type="number" 
                    name="updatedAge" 
                    placeholder="Update age"
                    onChange={props.handleChange} 
                    value={props.updatedAge} 
                />
                <input 
                    type="text" 
                    name="updatedHeight" 
                    placeholder="Update height"
                    onChange={props.handleChange} 
                    value={props.updatedHeight} 
                />
                <button>Update</button>
            </form>
        </div>
    )
}

 export default UpdateSmurf; 