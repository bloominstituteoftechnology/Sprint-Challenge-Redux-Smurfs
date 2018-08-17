import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfData, addNewSmurf } from "../actions/index";
import "./App.css";
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
      height: ""
    };
  }
  componentDidMount() {
    this.props.fetchSmurfData();
  }

  inputChangeHandler = event => {
    // console.log("Name", event.target.value);
    // console.log("he", event.target.value);
    // console.log("age", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };
  submitNewSmurfHandler = event => {
    event.preventDefault();
    let addedSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addNewSmurf(addedSmurf);
    this.setState({ name: "", age: "", height: "" });
  };
  render() {
    console.log("height", this.state.height);
    console.log("age", this.state.age);
    console.log("name", this.state.name);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <ul style={{ listStyle: "none" }}>
          {this.props.smurfs.map(smurf => {
            return <li key={smurf.name}>{smurf.name}</li>;
          })}
        </ul>
        <form onSubmit={this.submitNewSmurfHandler}>
          <input
            placeholder="name..."
            value={this.state.name}
            onChange={this.inputChangeHandler}
            name="name"
          />
          <input
            placeholder="age..."
            value={this.state.age}
            onChange={this.inputChangeHandler}
            name="age"
          />
          <input
            placeholder="height..."
            value={this.state.height}
            onChange={this.inputChangeHandler}
            name="height"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSmurfData,
    addNewSmurf
  }
)(App);
