import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addSmurf, getSmurfs, updateSmurf, deleteSmurf } from "../actions";
import SmurfForm from "./SmurfForm";

class App extends Component {
  state = {
    update: false,
    id: ""
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  toggleForm = e => {
    const id = e.target.id;
    this.state.update
      ? this.setState({ update: false, id: "" })
      : this.setState({ update: true, id: id });
    // this.setState({ update: !this.state.hidden, id: id });
  };

  deleteSmurf = e => {
    this.props.deleteSmurf(e.target.id);
  };

  render() {
    console.log(this.state.id);
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
          <div className="form-container">
            <SmurfForm add={addSmurf} />
            {this.state.update && (
              <SmurfForm
                update={this.props.updateSmurf}
                toggle={this.toggleForm}
                id={this.state.id}
                smurfs={smurfs}
                updating
              />
            )}
          </div>
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
