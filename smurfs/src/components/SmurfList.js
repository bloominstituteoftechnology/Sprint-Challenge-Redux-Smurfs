import React, { Component } from 'react'
import { connect } from 'react-redux'
import Smurf from './Smurf'
import { deleteSmurf } from '../actions'

class SmurfList extends Component {
  smurfElements = () => this.props.smurfs.map((smurf) => (
    <Smurf {...smurf} key={smurf.id} deleteSmurf={this.props.deleteSmurf} />
  ))

  render() {
    return (
      <div>
        {this.smurfElements()}
      </div>
    )
  }
}

export default connect(null, { deleteSmurf })(SmurfList)