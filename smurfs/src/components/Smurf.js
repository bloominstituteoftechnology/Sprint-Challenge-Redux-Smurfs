import React from 'react'

const Smurf = (props) => {
    const {name, height, age, id} = props.smurf
    return (
        <div>
            <li>{name}</li>
            <li>{height}</li>
            <li>{age}</li>
            <button onClick={event => props.handleDeleteSmurf(event, id)}>Delete Smurf</button>
        </div>
    )
}

export default Smurf;