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
    this.setState({
      newSmurf: {
        name: "",
        age: "",
        height: ""
      }
    });
  };
  render() {
    return (
      <div className="smurf-form-container">
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            onChange={this.handleSmurfFormInput}
            value={this.state.newSmurf.name}
            name="name"
            placeholder="Name"
          />
          <input
            type="number"
            onChange={this.handleSmurfFormInput}
            value={this.state.newSmurf.age}
            name="age"
            placeholder="Age"
          />
          <input
            type="text"
            onChange={this.handleSmurfFormInput}
            value={this.state.newSmurf.height}
            name="height"
            placeholder="Height"
          />
          <input type="submit" value="Add New Smurf" id="smurf-submit" />
        </form>
      </div>
    );
  }
}

export default SmurfForm;
