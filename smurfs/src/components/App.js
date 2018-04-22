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
    height: "",

    newName: "",
    newAge: "",
    newHeight: "",

    editIsHidden: true
  };

  componentDidMount() {
    this.props.fetchSmurf(); // returning normal fetch ✓
  }

  // save it for nesting later
  // onChangeFunc = e => {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

  render() {
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
                  step="1"
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
                  step="1"
                  onChange={e =>
                    this.setState({ [e.target.name]: e.target.value })
                  }
                />

                <button
                  className="BtnAdd"
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
                  <div className="SmurfList_card">
                    <div className="SmurfList_item">
                      <div key={eachSmurf.id}>
                        <h3>Name: {eachSmurf.name}</h3>
                        <h3>Age: {eachSmurf.age}</h3>
                        <h3>height: {eachSmurf.height}cm</h3>

                        <div className="DeleteSmurf">
                          <button
                            className="BtnDelete"
                            onClick={() => this.props.deleteSmurf(eachSmurf.id)}
                          >
                            <s>Terminate</s> Remove Smurf
                          </button>
                          {/*end of 'DeleteSmurf' */}
                        </div>

                        <div className="EditSmurf">
                          <div>
                            <button
                              className="BtnEdit"
                              onClick={() => {
                                this.setState({
                                  editIsHidden: !this.state.editIsHidden
                                });
                              }}
                            >
                              Edit this Smurf
                            </button>
                          </div>

                          {this.state.editIsHidden ? null : (
                            <div className="EditSmurf_input">
                              <div className="EditSmurfBorder">
                                <div>
                                  {" "}
                                  <input
                                    type="text"
                                    name="newName"
                                    placeholder="name"
                                    value={this.state.newName}
                                    onChange={e =>
                                      this.setState({
                                        [e.target.name]: e.target.value
                                      })
                                    }
                                  />
                                </div>

                                <div>
                                  <input
                                    type="number"
                                    name="newAge"
                                    placeholder="age"
                                    value={this.state.newAge}
                                    min="0"
                                    step="1"
                                    onChange={e =>
                                      this.setState({
                                        [e.target.name]: e.target.value
                                      })
                                    }
                                  />
                                </div>

                                <div>
                                  <input
                                    type="number"
                                    name="newHeight"
                                    placeholder="height"
                                    value={this.state.newHeight}
                                    min="0"
                                    step="1"
                                    onChange={e =>
                                      this.setState({
                                        [e.target.name]: e.target.value
                                      })
                                    }
                                  />
                                </div>

                                <div>
                                  {" "}
                                  <button
                                    onClick={() => {
                                      this.props.updateSmurf({
                                        name: this.state.newName,
                                        age: this.state.newAge,
                                        height: this.state.newHeight
                                      });
                                      this.setState({
                                        newName: "",
                                        newAge: "",
                                        newHeight: ""
                                      });
                                    }}
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                          {/*end of 'Edit' */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/*end of 'SmurfList' */}
              </div>
            </div>
          )}
          {/*end of 'MainContainer' */}
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
