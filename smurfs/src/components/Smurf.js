import React from 'react';

export default (props) => (
    <ul>
        <li>{props.smurf.name}</li>
        <li>{props.smurf.age}</li>
        <li>{props.smurf.height}</li>
    </ul>
);