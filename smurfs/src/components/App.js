import React, { Component } from 'react';
import './App.css';
import { fetchSmurfs, createSmurf } from '../actions';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurf:"",
    age:"",
    height:""
  }

  //ComponentDidMount
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addSmurf = event => {
    const { name, age, height } = this.state;
    this.props.smurfs.push({ name, age, height });
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>
          <input
            type="text"
            placeholder="SMURF"
            name="smurf"
            value={this.state.smurf}
            onChange={this.handleInput}
          />
          <input
            type="text"
            placeholder="SMURF-AGE"
            name="age"
            value={this.state.age}
            onChange={this.handleInput}
          />
          <input
            type="text"
            placeholder="SMURF-HEIGHT"
            name="height"
            value={this.state.height}
            onChange={this.handleInput}
          />
          <button className="smurfButton" onClick={this.addSmurf}>
          Add Smurf
          </button>
          <ul>
            {this.props.smurfs.map(smurf => <li key={smurf}>{smurf}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

// state to props function
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    pending: state.pending
  };
};

//Connected
export default connect(mapStateToProps, { fetchSmurfs, createSmurf })(App);
