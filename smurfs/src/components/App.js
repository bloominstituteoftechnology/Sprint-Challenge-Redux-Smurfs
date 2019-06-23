import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf, fetchSmurfs } from "../actions";
import "./App.css";

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
    this.props.fetchSmurfs();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    this.props.addSmurf(this.state);
  };

  handleDelete = () => {
    this.props.deleteSmurf(this.id);
  };

  render() {
    return (
      <div className="App">
        <ul>
          {this.props.smurfs.map(smurf => (
            <li key={smurf.name} smurf={smurf}>
              <h1>{smurf.name}</h1>
              <p>{smurf.age} age</p>
              <p>{smurf.height} height </p>
            </li>
          ))}
        </ul>
        <form>
          <input
            placeholder="Smurf Name..."
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            placeholder="Smurf Age..."
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input
            placeholder="Smurf Height..."
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Add Smurf!</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('state from mapStateToProps:', state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf }
)(App);
