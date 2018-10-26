import React from "react";
// import { Route, Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf, deleteSmurf } from "../actions";
import DisplaySmurf from "./DisplaySmurf";

class SmurfList extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    let displayItem = this.props.fetching ?
      (
        <h3>Data is Loading...</h3>
     )
      : 
      (
        this.props.smurfs.map(smurf => (
          <DisplaySmurf key={smurf.id} smurf={smurf} />
        ))
      ) 
    ;

    return <section className="smurfListContainer">{displayItem}</section>;
  }
}

const mapStateToProps = ({fetching, smurfs}) => {
  console.log("DisplaySmufs MapState", smurfs);
  return {
    smurfs,
    fetching
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf, deleteSmurf }
)(SmurfList);
