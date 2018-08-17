import React from 'react' 

function Smurf (props){
    return (
        <div className="smurf">
            <p><strong>{props.name}</strong> {props.age} {props.height}</p>
        </div>
    )
}

export default Smurf