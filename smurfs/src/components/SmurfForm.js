import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height,
    }
    this.props.addSmurf(newSmurf);
    this.setState({name: '', age: '', height: ''});
  }

  render(){
    return(
      <div className="smurf-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name" />
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="name"
            id="name"
            value={this.state.name}
            name="name"
          />
          <label htmlFor="age" />
          <input
            type="number"
            onChange={this.handleChange}
            placeholder="age"
            id="age"
            value={this.state.age}
            name="age"
          />
          <label htmlFor="height" />
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="height"
            id="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
