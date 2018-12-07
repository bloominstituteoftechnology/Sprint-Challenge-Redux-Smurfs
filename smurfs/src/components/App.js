import React, { Component } from "react";
import { connect } from "react-redux";
import { loadingSmurf, addSmurf, removeSmurf } from "../actions";
import Smurf from "./Smurf";
import "./App.css";
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
      name: "",
      age: "",
      height: ""
    };
  }
  componentDidMount() {
    this.props.loadingSmurf();
  }
  deleteHandle = id => {
    // console.log(id);
    this.props.removeSmurf(id);
  };
  submitHandle = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
  };
  inputHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    if (this.props.fetchingSmurfs === true) {
      return <h2>smurfing the smurfs</h2>;
    }
    // console.log("render", this.props.smurfs);
    return (
      <div className="App">
        <form onSubmit={this.submitHandle}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.inputHandle}
          />
          <input
            type="text"
            placeholder="age"
            name="age"
            value={this.state.age}
            onChange={this.inputHandle}
          />
          <input
            type="text"
            placeholder="height"
            name="height"
            value={this.state.height}
            onChange={this.inputHandle}
          />
          <button type="submit">Add a new smurf</button>
        </form>
        {this.props.smurfs.map(smurf => (
          <Smurf
            key={smurf.id}
            smurf={smurf}
            deleteHandle={this.deleteHandle}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { loadingSmurf, addSmurf, removeSmurf }
)(App);
