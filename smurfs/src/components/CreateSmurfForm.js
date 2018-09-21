import React from 'react';

const SmurfForm = (props) => {
    return (
        <div className="smurf-form">
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={props.handleChange}
                    value={props.name}
                />

                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={props.handleChange}
                    value={props.age}
                />  

                <input
                    type="text"
                    name="height"
                    placeholder="Height"
                    onChange={props.handleChange}
                    value={props.height}
                />
                <button>Add Smurf</button>              
            </form>
        </div>
    )
}

export default SmurfForm;