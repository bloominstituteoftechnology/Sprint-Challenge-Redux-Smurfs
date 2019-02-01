import React, { Component } from "react";
import { connect } from "react-redux";
import { createSmurf } from "../actions";

class AddSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  changeHandler = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  addSmurfFunc = event => {
    event.preventDefault();
    this.props.createSmurf(this.state);
    console.log(this.state);
    this.setState(
      {
        name: "",
        age: "",
        height: ""
      },
      console.log(this.state)
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.addSmurfFunc(event)}>
          <div>
            <input onChange={this.changeHandler} name="name" placeholder="Name" type="input" value={this.state.name} />
            <input onChange={this.changeHandler} name="age" placeholder="Age" type="input" value={this.state.age} />
            <input
              onChange={this.changeHandler}
              name="height"
              placeholder="Height"
              type="input"
              value={this.state.height}
            />
          </div>
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { createSmurf }
)(AddSmurfForm);
