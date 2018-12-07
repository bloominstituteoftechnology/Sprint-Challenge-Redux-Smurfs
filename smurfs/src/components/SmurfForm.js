import React from 'react';

class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('sumbit');
  };

  makeInput = (name, type = 'text') => {
    return (
      <input
        type={type}
        name={name}
        placeholder={name}
        value={this.state[name]}
        onChange={this.handleChange}
      />
    );
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.makeInput('name')}
        {this.makeInput('age')}
        {this.makeInput('height')}
      </form>
    );
  }
}

export default SmurfForm;
