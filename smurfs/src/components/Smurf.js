import React from 'react';

const Smurf = props => {
    return (
        <p>Name: {props.smurf.name}, Age: {props.smurf.age}, Height: {props.smurf.height}</p>
    );
}
 
export default Smurf;