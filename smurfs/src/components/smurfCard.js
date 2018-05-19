import React from 'react';

const SmurfCard = (props) => {
    return ( 
        <div className="SmurfCard-container">
            {console.log("SmurfCard ", props.smurf)}
            <h1>{props.smurf.name}</h1>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <div>
                <button className="ok-button">Edit</button>
                <button className="cancel-button">Delete</button> 
            </div>
        </div>
    )
}
 
export default SmurfCard;