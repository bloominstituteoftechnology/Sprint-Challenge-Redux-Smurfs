import React from 'react';

 export default class AddSmurf extends React.Component {
  state = {
    name: '',
    age: '',
    height: '',
  };

   handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }) 
  }

   handleSubmit = e => {
    e.preventDefault();
    if (this.state.name && this.state.age && this.state.height) {
      this.props.handleAddSmurf({name: this.state.name, age: this.state.age, height: `${this.state.height}cm`})
      this.setState({ name: '', age: '', height: ''})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <input
          type="number"
          placeholder="age"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          required
        />
        <input
          type="number"
          placeholder="height (cm)"
          name="height"
          value={this.state.height}
          onChange={this.handleChange}
          required
        />
      <input type="submit" value="Submit" />
      </form>
    )
  }
} 