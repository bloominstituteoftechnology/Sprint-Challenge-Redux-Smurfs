import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editSmurf, deleteSmurf } from '../actions'

class Smurf extends Component {
  handleDelete = id => {
    this.props.deleteSmurf(id)
  }

  render() {
    const { smurf: {name, age, height, id} } = this.props

    return (
      <div className="Smurf">
	<div>Name: {name}</div>
	<div>Age: {age}</div>
	<div>Height: {height}</div>
	<div>ID: {id}</div>
	<button onClick={_event => this.handleDelete(id)}>Delete Smurf</button>
	<hr/>
      </div>
    )
  }
}

const mapDispatchToProps = {
  editSmurf,
  deleteSmurf,
}

export default connect(
  null,
  mapDispatchToProps,
)(Smurf)
