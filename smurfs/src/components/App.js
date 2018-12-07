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
    if (e.target.id.length > 0) {
      this.setState({ update: true, id: e.target.id });
    } else {
      this.setState({ update: false, id: "" });
    }
  };

  deleteSmurf = e => {
    this.props.deleteSmurf(e.target.id);
  };

  render() {
    const { smurfs, addSmurf } = this.props;
    const { deleteSmurf, toggleForm } = this;
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className="content-container">
          <div className="smurf-list">
            {smurfs.map((smurf, index) => {
              return (
                <div className="smurf-card" key={index}>
                  <span onClick={deleteSmurf} id={smurf.id}>
                    X
                  </span>
                  <h2>{smurf.name}</h2>
                  <p>{smurf.age}</p>
                  <p>{smurf.height}</p>
                  <button id={smurf.id} onClick={toggleForm}>
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
