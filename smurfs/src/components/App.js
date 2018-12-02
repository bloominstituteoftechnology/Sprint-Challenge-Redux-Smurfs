import React, { Component } from "react";
import "./App.css";
import { fetchSmurfs, addSmurf } from "../actions";
import { connect } from "react-redux";
import Smurfs from "./Smurfs";
import SmurfForm from './SmurfForm'; 

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
      height: ""
    };
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  changeInputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitDataHandler = event => {
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(newSmurf);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm
          change={this.changeInputHandler}
          submit={this.submitDataHandler}
        />
        {this.props.loadingSmurfs ? (
          <p> Fetching your Smurfs...  </p>
        ) : (
          this.props.smurfs.map(smurf => {
            return (
              <Smurfs name={smurf.name} age={smurf.age} height={smurf.height} />
            );
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf }
)(App);
