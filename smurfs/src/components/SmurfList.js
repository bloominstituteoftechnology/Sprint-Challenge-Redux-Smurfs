import React from "react";

const SmurfList = (props) => {
    return(
        <div className="smurf-list">
        {
            props.smurfs.map( smurf => (
                <div className="smurf" id={smurf.id} key={smurf.id}>
                    <p>Update</p>
                    <p onClick={(event,id=smurf.id) => props.delete(event,id)} >Delete</p>
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