import React from 'react'

export default function Form(props) {
    return (
        <form>
            <input 
                type="text"
                name="name"
                placeholder="Enter Name"
                value={props.name}
                onChange={props.handleChangeEvent}
            />
            <input 
                type="number"
                name="age"
                placeholder="Enter Age"
                value={props.age}
                onChange={props.handleChangeEvent}
            />
            <input 
                type="text"
                name="height"
                placeholder="Enter Height"
                value={props.height}
                onChange={props.handleChangeEvent}
            />
            <button
                onClick={props.addSmurf}
            >
                Add Smurf
            </button>
        </form>
    )
}