import React from 'react';

export default function SmurfVillage(props) {
    return (
        <div>
            {props.smurfs.map((smurf, i) => (
                <div key={i}>
                    <div>{smurf.name}</div>
                    <div> {smurf.age} </div>
                    <div> {smurf.height} </div>
                </div>
            ))}
        </div>
    );
}