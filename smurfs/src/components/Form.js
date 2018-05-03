import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSmurf, updateSmurf, cancelEdit, inputChange } from '../actions'

class Form extends Component {

  componentDidUpdate = prevProps => {
    const { editing, activeSmurf: {name, age, height, id} } = this.props
    if(!editing || editing === prevProps.editing) return
    this.nameInput.focus()
  }

  handleInputChange = e => {
    const { value } = e.target
    this.props.inputChange({ [e.target.name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, age, height } = this.props.activeSmurf
    this.props.addSmurf({ name, age, height })
  }

  postSmurf = smurf => {
    this.props.addSmurf(smurf)
  }

  handleUpdate = e => {
    e.preventDefault()
    const { name, age, height, id } = this.props.activeSmurf
    this.props.updateSmurf({ name, age, height, id })
  }

  handleCancel = _e => {
    this.props.cancelEdit()
  }

  render() {
    const { editing, activeSmurf } = this.props
    const { name, age, height } = activeSmurf

    return (
      <form onSubmit={editing ? this.handleUpdate : this.handleSubmit}>
	<input
	  onChange={this.handleInputChange}
	  name="name"
	  type="text"
	  placeholder="Smurf name"
	  value={name}
	  id="form-name"
	  ref={input => this.nameInput = input}
	  />
	<input
	  onChange={this.handleInputChange}
	  name="age"
	  type="text"
	  placeholder="Age"
	  value={age}
	  id="form-age"
	  />
	<input
	  onChange={this.handleInputChange}
	  name="height"
	  type="text"
	  placeholder="Height"
	  value={height}
	  id="form-height"
	  />
	{editing ?
	  <span>
	    <input type="submit" value="Save Smurf"/>
	      <button onClick={this.handleCancel}>Cancel Edit</button>
	  </span>
	  : <input type="submit" value="Add smurf"/>
	}
      </form>
    )
  }
}

const mapStateToProps = ({ editing, activeSmurf }) => ({ editing, activeSmurf })
const mapDispatchToProps = {
  addSmurf,
  updateSmurf,
  cancelEdit,
  inputChange,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form)
