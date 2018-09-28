import React from 'react';

const Smurf = props => {
    return (
        <section className="smurf">
            <h3 className="smurf-name">{props.smurf.name}</h3>
            <p className="smurf-age"><span className="smurf-label">Age:</span> {props.smurf.age} Years Old</p>
            <p className="smurf-height"><span className="smurf-label">Height:</span> {props.smurf.height} Tall</p>
            <div className="buttons">
                <div onClick={() => props.banishSmurf(props.smurf)} className="button banish-smurf">Banish Smurf</div>
                <div onClick={() => props.changeSmurf({...props.smurfDataForUpdate, id: props.smurf.id})} className="button update-smurf">Update Smurf</div>
            </div>
        </section>
    )
}

export default Smurf;