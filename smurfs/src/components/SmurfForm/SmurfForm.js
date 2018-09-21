import React, { Fragment } from 'react';
import './SmurfForm.css'

function SmurfForm(props) {
    function handleSubmit(event) {
        event.preventDefault();
        props.handleAddNewSmurf(event);
    }

    return (
        <Fragment>
            <h2>Welcome a New Smurf to the Village</h2>
            <form className='form-container'>
            <h3>Name:</h3>
            <input 
                type='text'
                value={props.smurf.name}
                name='name'
                onChange={props.handleChange}
                />
            <h3>Age:</h3>
            <input 
                type='number'
                value={props.smurf.age}
                name='age'
                onChange={props.handleChange}
            />
            <h3>Height(cm):</h3>
            <input 
                type='text'
                value={props.smurf.height}
                name='height'
                onChange={props.handleChange}
            />
            <button onClick={handleSubmit}>Welcome Smurf!</button>
            </form>
        </Fragment>
    );
}

export default SmurfForm;