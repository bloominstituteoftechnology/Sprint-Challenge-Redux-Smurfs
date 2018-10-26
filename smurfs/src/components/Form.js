import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      height: '',
      age: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    const { name, age, height } = this.state;
    this.props.handleAddSmurf({ name, age, height });
    this.setState({ name: '', age: '', height: '' });
  };

  render() {
    const { name, age, height } = this.state;
    // const { handleAddSmurf } = this.props;
    return (
      <form className="form" onSubmit={this.formSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Enter name..."
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          value={height}
          name="height"
          placeholder="Enter height..."
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          value={age}
          name="age"
          placeholder="Enter age..."
          onChange={this.handleInputChange}
        />
        <button type="submit">{this.props.title}</button>
      </form>
    );
  }
}

export default Form;
