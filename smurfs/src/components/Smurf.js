import React from 'react'

const Smurf = (props) => {
    const {name, height, age} = props.smurf
    return (
        <div>
            <li>{name}</li>
            <li>{height}</li>
            <li>{age}</li>
        </div>
    )
}

export default Smurf;