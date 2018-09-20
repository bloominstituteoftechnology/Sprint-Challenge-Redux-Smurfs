import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions/index";
import "./App.css";
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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit() {
    this.props.addSmurf(this.state);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        
        <form onSubmit={() => this.handleSubmit()}>
          <input
            onChange={this.handleChange.bind(this)}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            onChange={this.handleChange.bind(this)}
            type="number"
            name="age"
            placeholder="Age"
          />
          <input
            onChange={this.handleChange.bind(this)}
            type="number"
            name="height"
            placeholder="Height"
          />
          <button type="submit"> Add Smurf </button>
        </form>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <li>
                <h4>{smurf.name}</h4>
                <p>{smurf.age} years old</p>
                <p>{smurf.height} tall</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
