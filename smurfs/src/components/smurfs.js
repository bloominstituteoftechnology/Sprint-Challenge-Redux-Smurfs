import React, { Component } from "react";
import { connect } from "react-redux";

class Smurfs extends Component {
  render() {
    return (
      <div>
        <ul>
            {console.log(this.props)}
          {this.props.smurfs.map(smurf => {
              return <li key={smurf.id}>{smurf.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(mapStateToProps)(Smurfs);