import React from 'react';

export default function SmurfVillage(props) {
    return (
        <div  >
            {props.smurfs.map((smurf, i) => (
                <div className='smurf' key={i}>
                    <div>{smurf.name}</div>
                    <div> {smurf.age} </div>
                    <div> {smurf.height} </div>
                    {/* <button onClick={() => props.deleteSmurfHandler(smurf.id)} >murder smurf?</button> */}
                </div>
            ))}
        </div>
    );
}