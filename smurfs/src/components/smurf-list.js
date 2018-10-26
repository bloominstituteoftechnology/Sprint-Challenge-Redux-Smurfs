

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
    if(props.focus !== null){
        classText += ' smurf-list_focus';
    }
    return (
        <div className={classText}>
            {loadNotifier}
            {props.smurfs.filter(smurf => smurfFocusFilter(smurf, props.focus)).map(smurf => (
                <Smurf
                    key={smurf.name}
                    smurf={smurf}
                    onClick={() => props.onFocus(smurf.id)}
                />
            ))}
            <div
                className="smurf-list-cancel"
                onClick={props.onCancel}
                children="cancel"
            />
            <div className="smurf-list-delete">Delete</div>
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

//-- Interaction Utilities -----------------------
function smurfFocusFilter(smurf, focusId) {
    if(focusId === null){ return true;}
    return smurf.id === focusId;
}
