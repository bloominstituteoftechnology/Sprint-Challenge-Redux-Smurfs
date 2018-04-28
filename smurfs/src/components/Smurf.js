import React from 'react';

const Smurf = (props) => {
    const { smurf } = props;

    return (
        
        <div className={'smurf'}>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
        </div>
    )
    
}


export default Smurf;