import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurfs, removeSmurfs, updateSmurfs } from "../actions";
import { logo } from "../logo.svg";

class App extends Component {
  state = {
    name: "",
    age: "",
    height: "",
    editName: "",
    editAge: "",
    editHeight: "",
    toggleForm: false
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  toggleHandler = () => {
    this.setState({ toggleForm: !this.state.toggleForm });
  };
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} />
        ) : (
          <ul className="smurfs">
            {this.props.smurfs.map(smurf => {
              return (
                <React.Fragment>
                  <li>{smurf.name}</li>
                  <li>{smurf.age}</li>
                  <li>{smurf.height}</li>
                  <button onClick={() => this.props.removeSmurfs(smurf.id)}>
                    Remove Smurf{" "}
                  </button>
                  <button onClick={this.toggleHandler}>Edit Smurf</button>
                  {this.state.toggleForm ? (
                    <form
                      onSubmit={event => {
                        event.preventDefault();
                        this.props.updateSmurfs(smurf.id, {
                          name: this.state.editName,
                          age: this.state.editAge,
                          height: this.state.editHeight
                        });
                        this.setState({ name: "" });
                      }}
                    >
                      <input
                        type="text"
                        placeholder="name"
                        name="editName"
                        value={this.state.editName}
                        onChange={this.changeHandler}
                      />
                      <input
                        type="text"
                        placeholder="age"
                        name="editAge"
                        value={this.state.editAge}
                        onChange={this.changeHandler}
                      />
                      <input
                        type="text"
                        placeholder="height"
                        name="editHeight"
                        value={this.state.editHeight}
                        onChange={this.changeHandler}
                      />
                      <button type="submit">Ok</button>
                    </form>
                  ) : null}
                  <hr />
                </React.Fragment>
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
            this.setState({ name: "", height: "", age: "" });
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
            type="text"
            placeholder="age"
            name="age"
            value={this.state.age}
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

export default connect(mapStateToProps, {
  fetchSmurfs,
  addSmurfs,
  removeSmurfs,
  updateSmurfs
})(App);
