import React from 'react';

const Smurfs = (props) => {
    return(
        <div className='smurfs'>
        {props.smurfs.map(smurf => (
            <div>
                <h1>name: {smurf.name}</h1>
                <p>age: {smurf.age}</p>
                <p>height: {smurf.height}</p>
            </div>
        ))}
        </div>
    )
}
export default Smurfs;
