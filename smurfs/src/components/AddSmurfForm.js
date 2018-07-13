import React from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions";

class AddSmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount() {
    console.log("ADD SMURF FORM PROPS ", this.props);
  }

  handleChange = event => {
    console.log("INPUT FORM EVENT: ", event);
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (!this.state.name || !this.state.age || !this.state.height) {
      alert(
        "All form fields are required! Please check your data and try again"
      );
    } else {
      let URL = "http://localhost:3333/smurfs";
      let newSmurf = this.state;
      console.log("HANDLE SUBMIT EVENT", event);
      this.props.addSmurf(URL, newSmurf);
      this.setState({
        name: "",
        age: "",
        height: ""
      });
    }
  };

  render() {
    return (
      <div className="smurf-form">
        <h3>Add A New Smurf</h3>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            className="form-control"
            type="text"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleChange}
          />

          <input
            className="form-control"
            type="text"
            name="height"
            placeholder="height"
            value={this.state.height}
            onChange={this.handleChange}
          />

          <button type="submit" className="btn">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {
    addSmurf
  }
)(AddSmurfForm);
