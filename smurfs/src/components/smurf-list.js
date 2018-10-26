

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
                    focus={props.focus === smurf.id}
                    smurf={smurf}
                    onClick={props.onFocus}
                />
            ))}
        </div>
    );
}

//-- Smurf - Implementation & Export -------------
export function Smurf(props) {
    let classText = 'smurf';
    if(props.focus){
        classText += ' smurf_focus';
    }
    return (
        <div className={classText} onClick={props.onClick} data-id={props.smurf.id}>
            <span>Name: {props.smurf.name}</span>
            <span>Age: {props.smurf.age}</span>
            <span>Height: {props.smurf.height}</span>
        </div>
    );
}
