import React, { Component } from "react";
import { connect } from "react-redux";
import { newSmurf } from "../actions/";

class NewSmurf extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitSmurf = event => {
    event.preventDefault();
    this.props.newSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <div>
        <ul>
          <li key="listKey">
            <form onSubmit={this.submitSmurf}>
              <div>
                Name:
                <input
                  name="name"
                  type="text"
                  onChange={this.handleInput}
                  placeholder="Name"
                />
              </div>
              <div>
                Age:
                <input
                  name="age"
                  type="number"
                  onChange={this.handleInput}
                  placeholder="Age"
                />
              </div>
              <div>
                Height:
                <input
                  name="height"
                  type="height"
                  onChange={this.handleInput}
                  placeholder="Height"
                />
              </div>
              <button type="submit">Save The Smurf</button>
            </form>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    savingSmurf: state.savingSmurf,
    error: state.error
  };
};

export default connect(mapStateToProps, { newSmurf })(NewSmurf);
