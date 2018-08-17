import React from 'react' 

function Smurf (props){
    return (
        <div className="smurfCard">
            <p><strong>{props.name}</strong></p>
            <p>{props.age}</p>
            <p> {props.height}</p>
            <button onClick={() => props.deleteSmurf(props.id)}>Delete</button>
            <button id={props.id} onClick={props.update}>Update</button>
        </div>
    )
}

export default Smurf