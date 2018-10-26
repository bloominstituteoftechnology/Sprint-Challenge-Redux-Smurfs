import React from "react";

const SmurfCard = props => {
    return (
        <section>
            <h2>{props.smurf.name}</h2>
            <p><strong>Age:</strong> {props.smurf.age} smurf years</p>
            <p><strong>Height:</strong> {props.smurf.height}</p>
        </section>
    );
}

export default SmurfCard;