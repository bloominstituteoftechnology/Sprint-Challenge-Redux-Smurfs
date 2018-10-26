import React from 'react'

const SmurfList = (props) => {
    return (
           <div>
               {props.smurfs.map(smurf => {
                   return <div>
                            <button onClick={() => props.delete(smurf.id)}>Delete Smurf</button>
                            <h1>{smurf.name}</h1>
                            <h1>{smurf.age}</h1>
                            <h1>{smurf.height}</h1>
                            </div>
               })}
           </div>
    )
}

export default SmurfList;