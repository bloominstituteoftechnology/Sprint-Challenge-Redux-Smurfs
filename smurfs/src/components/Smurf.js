import React from 'react';
import './App.css';

const Smurf = props => {
    return (
        <div className="smurf-container">
            <div className="smurf">
                <div>{props.smurf.name}</div>
                <div>{props.smurf.age}</div>
                <div>{props.smurf.height}</div>
            </div>
            <div className="smurf-buttons">
                <button onClick={() => props.handleUpdate(props.smurf.id)}>Edit</button>
                <button onClick={() => props.handleDelete(props.smurf.id)}>Delete</button>
            </div>
        </div>
    );
};

export default Smurf;