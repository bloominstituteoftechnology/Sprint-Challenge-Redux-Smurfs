import React from 'react';
import { Link } from 'react-router-dom';

export default function SmurfCard(props) {
    return (
        <div>
            <p>name: {props.smurf.name}</p>
            <p>age: {props.smurf.age}</p>
            <p>height: {props.smurf.height}</p> 
            <Link to={`/${props.smurf.id}`}>
                <button>Edit</button>
            </Link>       
            <button onClick={() => 
            props.deleteSmurf(props.smurf.id)}>
                Delete
            </button>
        </div>
    );
}