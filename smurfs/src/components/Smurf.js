import React from 'react' 

function Smurf (props){
    return (
        <div className="smurfCard">
            <p><strong>{props.name}</strong></p>
            <p>{props.age}</p>
            <p> {props.height}</p>
            <button>Delete</button>
            <button>Update</button>
        </div>
    )
}

export default Smurf