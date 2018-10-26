import React from "react";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";

const Smurfs = props => {
  return (
    <div className="smurf-card-container">
      {props.smurfs.map(smurf => {
        return <SmurfCard key={smurf.id} smurf={smurf} />;
      })}
    </div>
  );
};

export default Smurfs;
