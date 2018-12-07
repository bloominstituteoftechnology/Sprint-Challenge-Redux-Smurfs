import React from 'react';

const Smurf = ({smurf}) => {
    return (
        <div>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <hr/>
        </div>
    );
}
export default Smurf;
