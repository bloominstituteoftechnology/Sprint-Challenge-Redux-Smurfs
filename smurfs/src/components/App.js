import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import AddSmurfForm from "./AddSmurf";
import SmurfList from "./SmurfsList";
import { fetchSmurfs, addSmurf, /*deleteSmurf, updateSmurf*/ } from "../actions";
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
    };
  }
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addSmurf = smurf => {
    this.props.addSmurf(smurf);
    this.setState({ name: "", age: "", height: "" });
  };
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddSmurfForm
          name={this.state.name}
          age={this.state.age}
          height={this.state.height}
          handleInput={this.handleInput}
          addSmurf={this.addSmurf}
          
        />
        <SmurfList
          smurfs={this.props.smurfs}
          
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchSmurfs: state.fetchSmurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf, }
)(App);