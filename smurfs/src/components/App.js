import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addSmurf, getSmurfs, updateSmurf, deleteSmurf } from "../actions";
import SmurfForm from "./SmurfForm";

class App extends Component {
  state = {
    hidden: true,
    id: ""
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  toggleForm = e => {
    const id = e.target.id;
    const smurf = this.props.smurfs.filter(smurf => smurf.id === id);
    this.setState({ hidden: !this.state.hidden });
  };

  deleteSmurf = e => {
    this.props.deleteSmurf(e.target.id);
  };

  render() {
    const { smurfs, addSmurf } = this.props;
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className="content-container">
          <div className="smurf-list">
            {smurfs.map((smurf, index) => {
              return (
                <div className="smurf-card" key={index}>
                  <span onClick={this.deleteSmurf} id={smurf.id}>
                    X
                  </span>
                  <h2>{smurf.name}</h2>
                  <p>{smurf.age}</p>
                  <p>{smurf.height}</p>
                  <button id={smurf.id} onClick={this.toggleForm}>
                    Update {smurf.name}
                  </button>
                </div>
              );
            })}
          </div>
          {this.state.hidden ? (
            <SmurfForm add={addSmurf} />
          ) : (
            <SmurfForm
              update={this.props.updateSmurf}
              toggle={this.toggleForm}
              updating
            />
          )}
        </div>

        {/* <SmurfForm add={addSmurf} toggle={this.toggleForm} /> */}

        {/* <button onClick={this.toggleForm}>
          {this.state.hidden ? "Add Smurf" : "Hide Form"}
        </button> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { addSmurf, getSmurfs, updateSmurf, deleteSmurf }
)(App);
