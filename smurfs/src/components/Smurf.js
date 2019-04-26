import React from 'react';



const Smurf = props => {
    const { smurf } = props


    return (
        <div key={smurf.id}>
            <h2>Name: {smurf.name}</h2>
            <h2>Age: {smurf.age}</h2>
            <h2>Height: {smurf.height}</h2>
        </div>
    )
}

export default Smurf;