import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import AddSmurfForm from "./AddSmurfForm";
import SmurfList from "./SmurfList";
import { fetchSmurfs, addSmurf, deleteSmurf, updateSmurf } from "../actions";
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
      height: "",
      editingId: "",
      isEditing: false
    };
  }
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addToSmurfs = smurf => {
    this.props.addSmurf(smurf);
    this.setState({ name: "", age: "", height: "" });
  };
  toggleEditing = (name, age, height, id) => {
    if (!this.state.isEditing) {
      this.setState({
        isEditing: true,
        name: name,
        age: age,
        height: height,
        editingId: id
      });
    } else {
      this.setState({
        isEditing: false,
        name: "",
        age: "",
        height: "",
        editingId: ""
      });
    }
  };
  updateToSmurfs = () => {
    this.props.updateSmurf(
      { name: this.state.name, age: this.state.age, height: this.state.height },
      this.state.editingId
    );
    this.setState({
      isEditing: false,
      name: "",
      age: "",
      height: "",
      editingId: ""
    });
  };
  render() {
    return this.props.fetchingSmurfs ? (
      <div className="App">
        <h1>Fetching Smurf Data...</h1>
      </div>
    ) : (
      <div className="App">
        <AddSmurfForm
          name={this.state.name}
          age={this.state.age}
          height={this.state.height}
          handleInput={this.handleInput}
          addToSmurfs={this.addToSmurfs}
          isEditing={this.state.isEditing}
          updateToSmurfs={this.updateToSmurfs}
        />
        <h1>Smurf Village</h1>
        <SmurfList
          smurfs={this.props.smurfs}
          deleteSmurf={this.props.deleteSmurf}
          toggleEditing={this.toggleEditing}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf, deleteSmurf, updateSmurf }
)(App);
