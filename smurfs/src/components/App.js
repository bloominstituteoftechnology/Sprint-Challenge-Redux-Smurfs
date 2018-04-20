import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurfs } from "../actions";


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
        {this.props.fetching ? (
          <h1>Fetching</h1>
        ) : (
          <ul className="smurfs">
            {this.props.smurfs.map(smurf => {
              return (
              <div>
                  <li>{smurf.name}</li>
                  <li>{smurf.age}</li>
                  <li>{smurf.height}</li>
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
            vale={this.state.age}
            onChange={this.changeHandler}
          />
          <input
            type="text"
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

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSmurfs, addSmurfs })(App);
