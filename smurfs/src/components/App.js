import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from "../actions";

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
      this.props.getSmurfs();
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitSmurf = event => {
    event.preventDefault();
    this.props.addSmurf({
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
        <form onSubmit={this.submitSmurf}>

          <input
            onChange={this.handleInput}
            type='text'
            name="name"
            value={this.state.name}
            placeholder="name" />
          <input
            onChange={this.handleInput}
            type="number"
            name="age"
            value={this.state.age}
            placeholder="age"
          />
          <input
            onChange={this.handleInput}
            type="number"
            name="height"
            value={this.state.height}
            placeholder="height"
          />
          <button type="submit">Add Smurf</button>
        </form>

<ul>{this.props.smurfs.map(smurf => <li>{smurf.toString()}</li>)}</ul>

      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
