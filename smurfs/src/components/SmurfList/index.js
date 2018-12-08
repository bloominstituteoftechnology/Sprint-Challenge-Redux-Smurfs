import React from "react";
import { Link } from "react-router-dom";

const SmurfList = props => {
    const smurfs = props.smurfs
    return (
        <div className="smurf-list">
            {smurfs.map{
                smufs => {
                    return (
                        <Link to={`/smurfs/${smurf.id}`} key={Math.random()}>
                            <div className="smurf-card">{smurf.name}</div>
                        </Link>
                    )
                }
            }}
        </div>
    )
}

export default SmurfList;