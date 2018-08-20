import React from 'react';

export default function SmurfVillage(props) {
    return (
        <div  >
            {props.smurfs.map((smurf, i) => (
                <div className='smurf' key={i}>
                    <div>Name: {smurf.name}</div>
                    <div>Age: {smurf.age} </div>
                    <div>Height: {smurf.height} </div>
                    <button onClick={() => props.deleteSmurfHandler(smurf.id)} >murder smurf?</button>
                    <button onClick={() => props.updateHandler(smurf.id)} >Mutate Smurf?</button>
                    {props.updatingSmurf ? (<div className="updating" >updating....</div>) : (<div className="not-updating" >nothing here...</div>)}
                </div>
            ))}
        </div>
    );
}