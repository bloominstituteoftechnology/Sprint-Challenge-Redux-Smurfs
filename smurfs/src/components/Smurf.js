import React from 'react';

const Smurf = props => {
    return (
        <li>
            <ul>
                <li>
                    <h1>{props.smurf.name}</h1>
                </li>
                <li>{props.smurf.age}</li>
                <li>{props.smurf.height}</li>
            </ul>
        </li>
    );
};

export default Smurf;
