import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions'

export class Smurf extends Component {
  render() {
    return (
      <div>
        <h4>Name: {this.props.smurf.name}</h4>
        <p>Age: {this.props.smurf.age}</p>
        <p>Height: {this.props.smurf.height}</p>
        {console.log('Props Man', this.props)}
        <button onClick={this.props.deleteSmurf(this.props.id)}>Delete Smurf</button>
      </div>
    )
  }
}

export default connect(null, {deleteSmurf})(Smurf)
