import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf } from "../actions";
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
    this.props.fetchSmurfs();
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddSmurf = event => {
    const { name, age, height } = this.state;
    this.props.smurfs.push({ name, age, height });
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <div className="smurfForm">
          <form>
            <input
              type="text"
              placeholder="Smurf"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
            />
            <input
              type="text"
              placeholder="Smurf age"
              name="age"
              value={this.state.age}
              onChange={this.handleInput}
            />
            <input
              type="text"
              placeholder="Smurf height"
              name="height"
              value={this.state.height}
              onChange={this.handleInput}
            />
          </form>
          <button onClick={this.handleAddSmurf}>Add Smurf!</button>
        </div>

        <div className="smurfList">
          {this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.id}>
                <div>{smurf.name}</div>
                <div>{smurf.age}</div>
                <div>{smurf.height}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchSmurfs: state.fetchSmurfs,
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(App);
