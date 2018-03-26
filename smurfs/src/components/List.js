import React from 'react'

export default ({ data }) => {
  return data.map((smurf, i) => {
    return (
      <div key={i} className='smurf'>
        <img className='smurf__pic' src='https://i.imgur.com/QPz647Q.jpg'/>
        <div className='smurf__details'>
          <h1>{smurf.name}</h1>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
        </div>
      </div>
    )
  })
}
