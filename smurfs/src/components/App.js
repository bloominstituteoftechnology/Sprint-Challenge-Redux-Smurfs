import React, { Component } from "react";
import "./App.css";
import { getSmurfs } from "../actions";
import { addSmurf } from "../actions";
import { connect } from "react-redux";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: "",
    age: "",
    height: "",
    id: 0
  };
  componentDidMount() {
    this.props.getSmurfs();
  }
  submitHandler = ev => {
    ev = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(ev);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  changeHandler = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <form className="addSmurf" onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.changeHandler}
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            onChange={this.changeHandler}
            value={this.state.age}
          />
          <input
            type="text"
            placeholder="Height"
            name="height"
            onChange={this.changeHandler}
            value={this.state.height}
          />
          <button type="submit">Create Smurf</button>
        </form>
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <h2>{smurf.name}</h2>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    smurfs: state.smurfs,
    gettingSmurfs: state.gettingSmurfs,
    creatingSmurf: state.createSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
