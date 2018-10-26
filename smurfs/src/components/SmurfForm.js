import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  changeHandler = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  handleClick = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
  };

  render() {
    const { name, age, height } = this.state.smurf;
    return (
      <div className="SmurfForm">
        <form className="smurfForm">
          <input
            type="text"
            placeholder="Name..."
            name="name"
            value={name}
            onChange={this.changeHandler}
            autoComplete="off"
          />
          <input
            type="number"
            placeholder="Age..."
            name="age"
            value={age}
            onChange={this.changeHandler}
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Height..."
            name="height"
            value={height}
            onChange={this.changeHandler}
            autoComplete="off"
          />
          <button onClick={this.handleClick}>Add Smurf</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
