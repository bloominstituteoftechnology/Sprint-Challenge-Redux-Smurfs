import React, { Component } from "react";
import "./App.css";
import InputField from "./InputField";

import { fetchSmurf, addSmurf, deleteSmurf, updateSmurf } from "../actions";
import { connect } from "react-redux";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  componentDidMount() {
    this.props.fetchSmurf(); // returning normal fetch ✓
  }

  // save it for nesting later
  // onChangeFunc = e => {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

  render() {
    console.log("this.props._:", this.props.fetchingSmurfs); // returning normal ✓
    return (
      <div className="App">
        <header>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your Redux version of Smurfs!</div>
        </header>
        <br />
        {/* <InputField inputState={this.state} onChangeFunc={this.onChangeFunc()} /> */}
        <div className="MainContainer">
          {this.props.fetchingSmurfs ? (
            <h1>Loading Smurfs</h1>
          ) : (
            <div>
              <div className="InputField">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={e =>
                    this.setState({ [e.target.name]: e.target.value })
                  }
                />

                <input
                  type="number"
                  name="age"
                  placeholder="age"
                  value={this.state.age}
                  min="0"
                  onChange={e =>
                    this.setState({ [e.target.name]: e.target.value })
                  }
                />

                <input
                  type="number"
                  name="height"
                  placeholder="height"
                  value={this.state.height}
                  min="0"
                  onChange={e =>
                    this.setState({ [e.target.name]: e.target.value })
                  }
                />

                <button
                  onClick={() => {
                    this.props.addSmurf({
                      name: this.state.name,
                      age: this.state.age,
                      height: this.state.height
                    });
                    this.setState({ name: "", age: "", height: "" });
                  }}
                >
                  Add smurf
                </button>

                {/*end of 'InputField' */}
              </div>

              <div className="SmurfList">
                <h1>Smurf List</h1>
                {this.props.smurfs.map(eachSmurf => (
                  <div key={eachSmurf.id}>
                    {console.log("eachSmurf console", eachSmurf)}
                    <div>Name: {eachSmurf.name}</div>
                    <div>Age: {eachSmurf.age}</div>
                    <div>height: {eachSmurf.height}cm</div>
                    <br />
                    <div className="DeleteSmurf">
                      <button
                        onClick={() => this.props.deleteSmurf(eachSmurf.id)}
                      >
                        Remove Smurf
                      </button>
                    </div>
                  </div>
                ))}
                {/*end of 'SmurfList' */}
              </div>

              {/*end of 'MainContainer' */}
            </div>
          )}
        </div>
        {/*end of 'App' */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    deleteSmurf: state.deleteSmurf,
    updateSmurf: state.updateSmurf
  };
};

export default connect(mapStateToProps, {
  fetchSmurf,
  addSmurf,
  deleteSmurf,
  updateSmurf
})(App);
