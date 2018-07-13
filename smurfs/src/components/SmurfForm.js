import React from 'react';
import './App.css';

const SmurfForm = props => {
    return (
        <div className="smurf-form">  
            <form onSubmit={props.handleSubmit}>
                <input
                    name='name'
                    placeholder="Name"
                    value={props.name}
                    onChange={props.handleChange}
                />
                <input
                    name='age'
                    placeholder="Age"
                    value={props.age}
                    onChange={props.handleChange}
                />
                <input
                    name='height'
                    placeholder="Height"
                    value={props.height}
                    onChange={props.handleChange}
                />
                <button type="submit">Submit</button>
                {props.name !== '' || props.age !== '' || props.height !== '' ? <button onClick={() => props.handleClear()}>Clear</button> : null}
            </form>
            <p>Use form to add or edit smurf</p>
        </div>
    );
};

export default SmurfForm;