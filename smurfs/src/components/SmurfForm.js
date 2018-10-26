import React from "react";

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("in form", this.props);

    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(smurf);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };
  render() {
    return (
      <form className="SmurfForm" onSubmit={this.handleSubmit}>
        <input
          name="name"
          type="text"
          value={this.state.name}
          placeholder="name"
          onChange={this.handleInput}
        />
        <input
          name="age"
          type="number"
          value={this.state.age}
          placeholder="age"
          onChange={this.handleInput}
        />
        <input
          name="height"
          type="text"
          value={this.state.height}
          placeholder="height"
          onChange={this.handleInput}
        />
        <button className="form button">add</button>
      </form>
    );
  }
}
export default SmurfForm;
