import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
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
    email: ""
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  onInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  onFormSubmit = () => {
    this.props.
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <form>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
          />
          <input
            type="text"
            name="age"
            value={this.state.age}
            placeholder="Age"
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email"
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
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
