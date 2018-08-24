import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getTheData, postTheData } from "../actions";
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
    height: ""
  };
  componentDidMount() {
    this.props.getTheData();
    console.log("bing, data mounted.");
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    this.props.postTheData({
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
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          <input
            onChange={this.handleInput}
            name="name"
            value={this.state.name}
            placeholder="Smurf name"
          />
          <input
            onChange={this.handleInput}
            name="age"
            value={this.state.age}
            placeholder="age"
          />
          <input
            onChange={this.handleInput}
            name="height"
            value={this.state.height}
            placeholder="height"
          />
          <button onClick={this.handleSubmit}>Add smurf</button>
        </div>
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.name}>
              Name: {smurf.name} - Age: {smurf.age} - Height: {smurf.height}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pending: state.pending,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getTheData, postTheData }
)(App);
