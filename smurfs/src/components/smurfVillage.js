import React from 'react';
import UpdateForm from './updateForm';

export default function SmurfVillage(props) {
    return (
        <div  >
            {props.smurfs.map((smurf, i) => (
                <div className='smurf' key={i}>
                    <div> {smurf.name} </div>
                    <div> {smurf.age} years young </div>
                    <div> {smurf.height} tall </div>
                    <button onClick={() => props.deleteSmurfHandler(smurf.id)} >Banish Smurf?</button>
                    <button onClick={() => props.updateHandler()} >Mutate Smurf?</button>
                    { props.showForm && <UpdateForm inputName={smurf.name} inputAge={smurf.age} inputHeight={smurf.height} id={smurf.id} /> }
                </div>
            ))}
        </div>
    );
}