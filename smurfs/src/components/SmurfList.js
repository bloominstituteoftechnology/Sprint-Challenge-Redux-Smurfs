import React from "react";

const SmurfList = (props) => {
    return(
        <div className="smurf-list">
        {
            props.smurfs.map( smurf => (
                <div className="smurf" key={smurf.id}>
                    <p>{smurf.name}</p>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                </div>
            ))
        }
        </div>
    );
}


export default SmurfList;