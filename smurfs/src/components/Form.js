import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions'

class Form extends Component {
  state = { name: '', age: '', height: '', editing: false, }

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

  handleEdit = e => {
    console.log('editing')
  }

  postSmurf = smurf => {
    this.props.addSmurf(smurf)
  }

  render() {
    const { name, age, height } = this.state

    return (
      <form onSubmit={this.state.editing ? this.handleEdit : this.handleSubmit}>
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
	{this.state.editing
	  ? <input type="submit" value="Edit smurf"/>
	  : <input type="submit" value="Add smurf"/>
	}
      </form>
    )
  }
}

const mapDispatchToProps = {
  addSmurf,
}

export default connect(
  null,
  mapDispatchToProps,
)(Form)