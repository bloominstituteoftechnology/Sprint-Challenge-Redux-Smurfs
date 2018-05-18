import React, { Component } from "react";
import { connect } from "react-redux";
import SmurfForm from "./SmurfForm";
import SmurfUpdate from "./SmurfUpdate";
import { getSmurf, deleteSmurf, updateSmurf, saveSmurf } from "../actions";

class App extends Component {
  componentDidMount = () => {
    this.props.getSmurf();
  };
  render() {
    const {
      FetchingSmurfs,
      getSmurf,
      deleteSmurf,
      updateSmurf,
      saveSmurf
    } = this.props;

    return (
      <div>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        {!FetchingSmurfs &&
          this.props.smurfs.map(smurf => {
            return smurf.isUpdating ? (
              <SmurfUpdate key={smurf.id} />
            ) : (
              <div key={smurf.id}>
                <div>{smurf.name}</div>
                <div>{smurf.age}</div>
                <div>{smurf.height}</div>
                <button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
                <button onClick={() => updateSmurf(smurf)}>Edit</button>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {
  getSmurf,
  deleteSmurf,
  updateSmurf,
  saveSmurf
})(App);
