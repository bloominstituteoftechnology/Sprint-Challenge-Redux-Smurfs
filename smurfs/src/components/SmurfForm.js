import React from "react";

class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newSmurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }
  handleSmurfFormInput = e => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value
      }
    });
  };
  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            onChange={this.handleSmurfFormInput}
            value={this.state.name}
            name="name"
            placeholder="Name"
          />
          <input
            type="text"
            onChange={this.handleSmurfFormInput}
            value={this.state.age}
            name="age"
            placeholder="Age"
          />
          <input
            type="text"
            onChange={this.handleSmurfFormInput}
            value={this.state.height}
            name="height"
            placeholder="Height"
          />
          <input type="submit" value="Add New Smurf" />
        </form>
      </div>
    );
  }
}

export default SmurfForm;
