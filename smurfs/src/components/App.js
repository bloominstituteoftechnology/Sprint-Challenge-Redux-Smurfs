import React, { Component } from 'react';
import './App.css';
import { fetchSmurfs, createSmurf } from "../actions";
import { connect } from "react-redux";
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
    this.props.fetchSmurfs();
  }
  render() {
    console.log(this.props.smurfs);
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <form>
        <div className="form-div">
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            type="number"
            placeholder="age"
            name="age"
            value={this.state.age}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            type="text"
            placeholder="height"
            name="height"
            value={this.state.height}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
        </div>
        <button
          onClick={() => {
            this.props.createSmurf({
              name: this.state.name,
              age: Number(this.state.age),
              height: this.state.height
            });
            this.setState({ name: "", age: "", height: "" });
          }}
        >
          Add Smurf
        </button>
        </form>
        {this.props.pending ? <h3>Loading Smurfs...</h3> : null}
        {this.props.error !== null ? <h4>{this.props.error}</h4> : null}
        <div className="card-container">
          {this.props.smurfs.map(smurf => (
            <div key={smurf.id} className="smurf-card">
              <div>{smurf.name}</div>
              <div>{smurf.age}</div>
              <div>{smurf.height}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    pending: state.pending
  };
};

export default connect(mapStateToProps, { fetchSmurfs, createSmurf })(App);
