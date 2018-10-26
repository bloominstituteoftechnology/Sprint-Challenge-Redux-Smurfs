import React from 'react';

export default function SmurfForm(props) {
    return (
        <form>
            <input type="text"
            name="nameInput"
            placeholder="Name"
            value={props.nameInput}
            onChange={props.handleChange}
            />
            <input type="number"
            name="ageInput"
            placeholder="Age"
            value={props.ageInput}
            onChange={props.handleChange}
            />
            <input type="email"
            name="heightInput"
            placeholder="Height"
            value={props.nameInput}
            onChange={props.handleChange}
            />
            <button>Add Smurf to Village</button>

        </form>
    )
}