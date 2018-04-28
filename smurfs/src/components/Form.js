import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSmurf, updateSmurf, cancelEdit } from '../actions'

class Form extends Component {
  state = { name: '', age: '', height: '' }

  componentDidUpdate = prevProps => {
    const { editing, activeSmurf: {name, age, height} } = this.props
    if(!editing || editing === prevProps.editing) return
    this.setState({ name, age, height })
  }

  handleInputChange = e => {
    const { value } = e.target
    this.setState({ [e.target.name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, age, height } = this.state
    this.props.addSmurf({ name, age, height })
    this.setState(() => ({ name: '', age: '', height: '' }))
  }

  postSmurf = smurf => {
    this.props.addSmurf(smurf)
  }

  handleUpdate = e => {
    e.preventDefault()
    const { name, age, height } = this.state
    this.props.updateSmurf({ name, age, height })
  }

  handleCancel = _e => {
    this.setState(() => ({ name: '', age: '', height: '' }))
    this.props.cancelEdit()
  }

  render() {
    const { name, age, height } = this.state
    const { editing, activeSmurf } = this.props

    return (
      <form onSubmit={editing ? this.handleUpdate : this.handleSubmit}>
	<input
	  onChange={this.handleInputChange}
	  name="name"
	  type="text"
	  placeholder="Smurf name"
	  value={name}
	  />
	<input
	  onChange={this.handleInputChange}
	  name="age"
	  type="text"
	  placeholder="Age"
	  value={age}
	  />
	<input
	  onChange={this.handleInputChange}
	  name="height"
	  type="text"
	  placeholder="Height"
	  value={height}
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form)
