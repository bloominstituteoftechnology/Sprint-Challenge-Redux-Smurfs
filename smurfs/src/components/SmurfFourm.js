import React from "react";

class SmurfFourm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      name: "",
      height: ""
    };
  }
  addHanddler = event => {
    event.preventDefault();
    if (
      this.state.name !== "" &&
      this.state.height !== "" &&
      this.state.age !== 0
    ) {
      this.props.addSmurf(this.state);
      this.setState({
        name: "",
        age: 0,
        height: ""
      });
    }
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addHanddler}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            type="number"
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

export default SmurfFourm;
