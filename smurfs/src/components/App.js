import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurfs, removeSmurfs } from "../actions";


class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (<h1>Fetching</h1>) : (
          <ul className="smurfs">
            {this.props.smurfs.map((smurf,i) => {
              return (
              <div key={smurf.id + i}>
                  <li>{`Name: ${smurf.name}
                        Age: ${smurf.age}
                        Height: ${smurf.height} `}
                  </li>

                  <button onClick={() => this.props.removeSmurfs(smurf.id)}>Remove Smurf</button>
            </div>



              );
            })}
          </ul>
        )}
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.addSmurfs({
              name: this.state.name,
              age: this.state.age,
              height: this.state.height
            });
            this.setState({ name: "", age: "", height: "" });
          }}
        >
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <input
            type="number"
            placeholder="age"
            name="age"
            value={this.state.age}
            onChange={this.changeHandler}
          />
          <input
            type="number"
            placeholder="height"
            name="height"
            value={this.state.height}
            onChange={this.changeHandler}
          />
          <button type="submit">Add Smurf </button>
        </form>
      </div>
    );
  }
}
// how are we getting this state form reducer--> initial state
const mapStateToProps = state => {
  // initial state from reducer
  console.log('from mapStateToProps...',state);
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { fetchSmurfs, addSmurfs, removeSmurfs })(App);
