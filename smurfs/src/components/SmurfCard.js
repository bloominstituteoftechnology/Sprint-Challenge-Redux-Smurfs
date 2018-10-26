import React from "react";

const SmurfCard = props => {
    return (
        <section>
            <div className="first-line">
                <img
                    className="delX"
                    src="./images/Red_x.png"
                    alt="Delete"
                />
                <img
                    className="editBtn"
                    src="./images/pencil.png"
                    alt="Edit"
                />
                <h2>{props.smurf.name}</h2>
            </div>
            <p><strong>Age:</strong> {props.smurf.age} smurf years</p>
            <p><strong>Height:</strong> {props.smurf.height}</p>
        </section>
    );
}

export default SmurfCard;