import React, { Component } from 'react'

export default class AddSmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newSmurf = {
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height,
    }
    
    const emptySmurf = {
      name: '',
      age: '',
      height: '',
    }
    this.props.addSmurf(newSmurf)
    this.setState(emptySmurf)
  }
  
  render() {
    return (
      <div>
        <h2>Create Smurf Component</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <input
            name="age"
            type="number"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChange}
            required
          />
          <input
            name="height"
            type="text"
            placeholder="Height"
            value={this.state.height}
            onChange={this.handleChange}
            required
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
