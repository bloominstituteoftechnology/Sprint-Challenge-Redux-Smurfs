import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  updateSmurf,
  deleteSmurf,
  editSmurf,
  cancelEdit,
} from '../actions'

const styles = { color: 'blue' }
const activeStyles = { color: 'lightgrey' }

class Smurf extends Component {
  state = { activelyEditing: false }
  handleDelete = id => {
    this.props.deleteSmurf(id)
  }

  handleEdit = id => {
    console.log('editing this smurf')
    this.setState(() => ({ activelyEditing: true }))
    this.props.editSmurf(id)
  }

  cancelEdit = _event => {
    this.setState(() => ({ activelyEditing: false }))
    this.props.cancelEdit()
  }

  render() {
    const { smurf: {name, age, height, id}, activeSmurf, editing } = this.props
    const { activelyEditing } = this.state

    return (
      <div
	className="Smurf"
	style={activeSmurf.name === name ? {...styles, ...activeStyles} : styles}
	>
	<div>Name: {name}</div>
	<div>Age: {age}</div>
	<div>Height: {height} cm</div>
	<div>ID: {id}</div>
	<span>
	  {editing && activelyEditing
	    ? <button onClick={this.cancelEdit}>Cancel Edit</button>
	    : <button onClick={_event => this.handleEdit(id)}>Edit</button>
	  }
	  <button onClick={this.handleDelete}>Delete</button>
	</span>
	<hr/>
      </div>
    )
  }
}

const mapStateToProps = ({ editing, activeSmurf }) => ({ editing, activeSmurf })
const mapDispatchToProps = {
  updateSmurf,
  deleteSmurf,
  editSmurf,
  cancelEdit,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Smurf)
