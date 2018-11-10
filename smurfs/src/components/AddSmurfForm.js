import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addSmurf } from '../actions'

class AddSmurfForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: "",
      name: "",
      age: "",
      height: ""
    }
  }

  handleInput = event => {
    event.preventDefault()
    let newInput = event.target.value
    if (event.target.id === "input-name") {
      this.setState({
        name: newInput
      })
    }

    if (event.target.id === "input-age") {
      this.setState({
        age: newInput
      })
    }

    if (event.target.id === "input-height") {
      this.setState({
        height: newInput
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    let currentState = this.state

    let newSmurf = {
      name: currentState.name,
      age: Number(currentState.age),
      height: currentState.height
    }

    this.props.addSmurf(newSmurf)

    this.setState({
      input: "",
      name: "",
      age: "",
      height: ""
    })

    window.location.reload()
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            id="input-name"
            onChange={this.handleInput}
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="Age"
            id="input-age"
            onChange={this.handleInput}
            value={this.state.age}
          />
          <input
            type="text"
            placeholder="Height"
            id="input-height"
            onChange={this.handleInput}
            value={this.state.height}
          />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}
export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurfForm)
