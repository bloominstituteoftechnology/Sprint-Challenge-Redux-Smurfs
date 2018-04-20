import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurf, deleteSmurf } from "../actions";
import Smurf from './Smurf';
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

  onInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  onFormSubmit = () => {
    this.props.addSmurf({name: this.state.name, age: this.state.age, height: this.state.height});
    this.setState({name: '', age: '', height: ''});
  }

  onDelete = id => {
    this.props.deleteSmurf(id);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.onInputChange}
          />
          <input
            type="text"
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.onInputChange}
          />
          <input
            type="text"
            name="height"
            value={this.state.height}
            placeholder="Height"
            onChange={this.onInputChange}
          />
          <button type="submit">Add Smurf</button>
        </form>
        <ul>{this.props.smurfs.map(smurf => <Smurf key={`smurf${smurf.id}`} smurf={smurf} delete={this.onDelete}/>)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf, deleteSmurf })(App);
