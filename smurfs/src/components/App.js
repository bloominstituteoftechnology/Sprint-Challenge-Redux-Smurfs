import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf } from "../actions";
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
    this.props.fetchSmurfs();
  }

  changeHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  render() {
    if (this.props.isFetching) {
      return <h1>FETCHING SMURFS</h1>;
    }
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => {
          return <Smurf smurf={smurf} />;
        })}
        <div className="smurfForm">
          <form
            onSubmit={(ev) => this.props.addSmurf(ev, {
              name: this.state.name,
              age: Number(this.state.age),
              email: Number(this.state.email)
            })}
          >
            <input
              onChange={this.changeHandler}
              type="text"
              name="name"
              value={this.state.name}
            />
            <input
              onChange={this.changeHandler}
              type="text"
              name="age"
              value={this.state.age}
            />
            <input
              onChange={this.changeHandler}
              type="text"
              name="height"
              value={this.state.height}
            />
            <button type="submit">Add Smurf</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    isAdding: state.isAdding,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf }
)(App);
