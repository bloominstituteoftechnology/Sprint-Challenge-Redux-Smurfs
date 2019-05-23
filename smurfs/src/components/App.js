import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions/index";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      id: ""
    };
  }
  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.smurfs.map((smurf, i) => {
            return (
              <li key={i}>
                Name: {smurf.name} age: {smurf.age} height: {smurf.height} id: {smurf.id}
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.inputHandler}
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
          />
          <input
            onChange={this.inputHandler}
            type="number"
            name="age"
            value={this.state.age}
          />
          <input
            onChange={this.inputHandler}
            type="text"
            name="height"
            placeholder="Height"
            value={this.state.height}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    loading: state.loading
  };
};
export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
