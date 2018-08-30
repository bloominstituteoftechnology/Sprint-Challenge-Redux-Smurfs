import React from "react";
import { Smurf } from "./";

const SmurfList = props => {
    return (
        <div className="smurf-list">
            {props.smurfs.map(smurf => {
                return (
                    <div key={smurf.id} className="smurf-card"><Smurf smurf={smurf}/></div>
                );
            })}
        </div>
    );
}

export default SmurfList;