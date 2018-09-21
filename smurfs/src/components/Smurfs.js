import React from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions";
import Smurf from "./Smurf";

function Smurfs(props) {
  if (!props.smurfs || !props.smurfs.length) {
    return <h1>>Gargamel has stolen your smurfs! :( Go fetch them!</h1>;
  }
  return (
    <div className="smurfs-list-wrapper">
      {props.smurfs.map(smurf => (
        <Smurf smurf={smurf} key={smurf.id} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(Smurfs);
