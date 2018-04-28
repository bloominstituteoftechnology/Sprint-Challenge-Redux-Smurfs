import React from 'react';

const Smurf = (props) => {
    const { smurf } = props;

    const editSmurf = () => {

    }
    const deleteSmurf = () => {

    }

    return (
        
        <div className={'smurf'}>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <button onClick={editSmurf}>Edit</button>
            <button onClick={deleteSmurf}>Delete</button>
        </div>
    )
    
}


export default Smurf;