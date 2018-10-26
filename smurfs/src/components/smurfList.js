import React from 'react'

const SmurfList = (props) => {
    return (
        <div>
            {props.smurfs.map(smurf => {
                return <div>
                            <h3>{smurf.name}</h3>
                            <h3>{smurf.age}</h3>
                            <h3>{smurf.height}</h3>
                        </div>
            })}
        </div>
    )
}

export default SmurfList;