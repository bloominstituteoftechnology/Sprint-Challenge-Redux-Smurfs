import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

import { fetchSmurfs, addSmurf } from "../actions";
import Smurf from "../components/Smurf";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    fields: {
      name: "",
      age: "",
      height: ""
    }
  };

  componentDidMount() {
    console.log("CDM", this.props);
    this.props.fetchSmurfs();

    const fetchedItems = JSON.parse(localStorage.getItem("fetched"));
    if (fetchedItems !== null) {
      this.props.fetched(fetchedItems);
    }
  }
  handleInputChange = event => {
    console.log("!!!!!", event.target.name);
    const {name, value} = event.target 
    this.setState((prevState) => ({ fields: {...prevState.fields, [name]: value }}));
  };
  render() {
    console.log("Render", this.props, "and ", this.state);
    const letMeGrab =  this.state.fields;
    const { name, age, height } = letMeGrab;
    const keys = Object.keys( this.state.fields );
    console.log(keys)
    console.log(name)
    return (
      <div className="App">
        <form
          className="smurf-form"
          onSubmit={() => this.props.addSmurf(this.state.fields)}
        >
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={letMeGrab.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={height}
            name="height"
          />
          <button type="submit">Join village</button>
        </form>
        <ul className="SmurfVillage">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                id={smurf.id}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf }
)(App);
