import React, { Component } from "react";


class AddSmurf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: null,
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const { name, age, height } = this.state;

  this.props.addSmurf({ name, age, height });

    this.setState({
      name: "",
      age: null,
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfAddForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}





export default AddSmurf;
