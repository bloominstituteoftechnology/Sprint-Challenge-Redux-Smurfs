import React from 'react';

const Smurf = (props) => {
    return (
        <div>
            <span><strong>Name:</strong> {props.name}</span><br />
            <span><strong>Age:</strong> {props.age}</span><br />
            <span><strong>Height:</strong> {props.height}</span><br />
            <br/>
        </div>
    )
}

export default Smurf;