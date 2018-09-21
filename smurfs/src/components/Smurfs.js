import React from 'react';

const Smurfs = (props) => {
    return (
        <div className="smurfs">
            {props.smurfs.map(smurf => {
                return (
                    <div className="smurf" key={smurf.id}>
                        <p><strong>{smurf.name}</strong></p>
                        <p>{smurf.age}</p>
                        <p>{smurf.height}</p>
                        <button onClick={props.deleteSmurf} id={smurf.id}>Delete</button>
                        <button onClick={props.toggleUpdate} id={smurf.id}>Update</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Smurfs;