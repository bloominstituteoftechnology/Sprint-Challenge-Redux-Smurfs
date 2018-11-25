import React from "react";
import { fetchSmurfs } from "../actions";
import { connect } from "react-redux";

const Smurfs = props => {
  return (
    <div>
      {props.fetchingSmurfs ? (
        <div> ...fetching dem Smurfs </div>
      ) : (
        <ul>
          {props.smurfs.map(smurf => {
            return (
              <div key={smurf.id}>
                <h2>{smurf.name}</h2>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs,
    error: state.errorMessage
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(Smurfs);
