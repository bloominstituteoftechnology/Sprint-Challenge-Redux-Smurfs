import React, { Component } from 'react'
import { postSmurf } from '../actions'
import { connect } from 'react-redux'

export class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name] : e.target.value })
  }

  handleSubmit = () => {
    this.props.postSmurf(this.state) // Update to handle Editing Smurf details
  }

  render() {
    return (
      <form className="Form">
        <input onChange={this.onChangeHandler} type="text" name="name" placeholder="Smurf Name" />
        <input onChange={this.onChangeHandler} type="text" name="age" placeholder="Smurf Age" />
        <input onChange={this.onChangeHandler} type="text" name="height" placeholder="Smurf Height" />
        <button onClick={this.handleSubmit} type="submit">Add Smurf</button>
      </form>
    )
  }
}

export default connect(null, {postSmurf})(SmurfForm) //No need to connect any variable props just need to connect the async redux method
