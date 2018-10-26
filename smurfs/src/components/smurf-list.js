

//== Presentational Components for Displaying Smurfs List ======================

//-- Dependencies --------------------------------
import React from "react";

//-- SmurfList Component -------------------------
export function SmurfList(props) {
    let loadNotifier;
    let classText = 'smurf-list';
    if(props.loading){
        loadNotifier = (<div className="load-notifier">(Loading)</div>);
        classText += ' smurf-list_loading';
    }
    return (
        <div className={classText}>
            {loadNotifier}
            {props.smurfs.map(smurf => (
                <Smurf
                    key={smurf.name}
                    smurf={smurf}
                    onClick={props.onFocus}
                />
            ))}
        </div>
    );
}

//-- Smurf - Implementation & Export -------------
export function Smurf(props) {
    return (
        <div className='smurf' onClick={props.onClick} data-id={props.smurf.id}>
            <span>Name: {props.smurf.name}</span>
            <span>Age: {props.smurf.age}</span>
            <span>Height: {props.smurf.height}</span>
        </div>
    );
}
