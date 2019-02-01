import React from 'react';

const Smurf = props => {
    const {smurf} = props;
    return (
        <div>
            <p>ID: {smurf.id}</p>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <button type="submit" onClick={(e) => props.deleteSmurf(e, smurf.id)}>Delete</button>
            <hr/>
        </div>
    );
}

export default Smurf;
