import React from 'react';

export default props => {
    return (
        <div>
            <p>SmurfName: {props.smurf.name}</p>
            <p>SmurfAge: {props.smurf.age}</p>
            <p>SmurfHeight: {props.smurf.height}</p>
        </div>
    )
}