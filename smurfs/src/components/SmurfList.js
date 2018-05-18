import React from "react";
import { Smurf } from "./";

const SmurfList = props => {
    return (
        <div>
            {props.smurfs.map(smurf => {
                return (
                    <div key={smurf.id}><Smurf smurf={smurf}/></div>
                );
            })}
        </div>
    );
}