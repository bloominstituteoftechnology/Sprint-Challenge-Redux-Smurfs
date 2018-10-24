import React from 'react';

const Smurf = props => {
    return (
        <div className="Smurf">
            <h3>{props.smurf.name}</h3>
            <strong>{props.smurf.height} tall</strong>
            <p>{props.smurf.age} smurf years old</p>
            <div className="delete" onClick={() => props.deleteHandler(props.smurf.id)}>✕</div>
            <div className="edit" onClick={() => props.editHandler(props.smurf)}>EDIT</div>
        </div>
    )
}

export default Smurf;