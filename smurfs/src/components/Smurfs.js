import React, { Component } from 'react'

class Smurfs extends Component {
  render() {
    // const smurfs = Array.from(this.props.smurfs)
    console.log(this.props.smurfs)
    return (
      <div>
        <h2>Smurfs Component</h2>
        {/* { 
          this.props.smurf.map(smurf => {
            return (
              <div key={smurf.name}>
                <p1>{smurf.name}</p1>
              </div>
            )
          })
        } */}
      </div>
    )
  }
}

export default Smurfs