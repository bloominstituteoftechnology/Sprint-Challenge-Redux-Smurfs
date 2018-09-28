import React, { Component } from 'react'

class Smurfs extends Component {
  render() {
    return (
      <div>
        <h2>Smurfs Component</h2>
        { this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.name}>
                <h3>Name: {smurf.name}</h3>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Smurfs