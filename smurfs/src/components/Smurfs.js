import React from 'react'

export default ({smurfs}) =>
  smurfs.map(smurf =>
    <div 
      style={{
        border: '10px solid cornflowerblue',
        width: '500px',
        textAlign: 'center',
        margin: '20 0'
      }}
    >
      <h1>{smurf.name}</h1>
    </div>
  )
