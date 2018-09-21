import React, { Component } from "react";
import "./App.css";
import { getSmurf, postSmurf } from "../actions/index";
import { connect } from "react-redux";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();

    this.state = {
      smurfs: [],
      name: "",
      age: "",
      height: ""
    };
  }

  handleSubmitItem = () => {
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.postSmurf(newSmurf);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  componentDidMount() {
    this.props.getSmurf();
  }
  render() {
    return (
      <div className="App">
        <div className="Applications">
          <h1>Smurf Applications!</h1>
          <input
            type="text"
            placeholder="Enter Smurfs name"
            name="name"
            value={this.state.name}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter Smurfs age"
            name="age"
            value={this.state.age}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter Smurfs height"
            name="height"
            value={this.state.height}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <div>
            <button onClick={this.handleSubmitItem}>Add Smurf</button>
          </div>
        </div>

        <div className="smurf-list">
          <h1>List Of Smurfs!</h1>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
                <h3>
                  <ul key={smurf.name}> Name: {smurf.name}</ul>
                </h3>
                <li> Age: {smurf.age}</li>
                <li> Height: {smurf.height}</li>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { smurfReducer } = state;
  return {
    smurfs: smurfReducer.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurf, postSmurf }
)(App);
