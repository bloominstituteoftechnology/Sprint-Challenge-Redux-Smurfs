import React, { Component } from "react";
import { connect } from "react-redux";

import { getSmurfs, deleteSmurf } from "../actions";

// import SmurfUpdate from "./SmurfUpdate";

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  removeSmurf = id => {
    this.props.deleteSmurf(id);
    setTimeout(() => {
      this.props.getSmurfs();
    }, 2000);
  };

  render() {
    return (
      <div>
        {this.props.fetching ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {this.props.smurfs.map(smurf => {
              return (
                <li className="smurf" key={smurf.id}>
                  <p>{smurf.name}</p>
                  <p>{smurf.age}</p>
                  <p>{smurf.height}</p>
                  <div>
                    <button onClick={() => this.removeSmurf(smurf.id)}>
                      Delete Smurf
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(Smurfs);
