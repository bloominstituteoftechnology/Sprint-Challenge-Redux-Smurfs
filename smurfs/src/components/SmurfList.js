import React from "react";
// import { Route, Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf, deleteSmurf } from "../actions";
import DisplaySmurf from "./DisplaySmurf";
import AddSmurf from "./AddSmurf";
import ReactLoading from 'react-loading';

// this component manages all the logic and display components
// it gets all the method from action and use them as props

class SmurfList extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {

    // if state is "fetching" display loading message.
    // otherwise display smurf list

    let displayItem = this.props.fetching ? (
       <div className="loaderContainer">
      // spinning display
          <ReactLoading
            type={'spin'}
            color={'#ffffff'}
            height={'20%'}
            width={'20%'}
          />
        </div>
    ) : (
      this.props.smurfs.map(smurf => (
        <DisplaySmurf
          key={smurf.id}
          smurf={smurf}
          deleteSmurf={this.props.deleteSmurf}
        />
      ))
    );

    return (
      <div className="container">
        <AddSmurf addSmurf={this.props.addSmurf} />
        <div className="smurfListContainer">{displayItem}</div>
      </div>
    );
  }
}

// gets the state and map them to props
const mapStateToProps = ({ fetching, smurfs }) => {
  return {
    smurfs,
    fetching
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf, deleteSmurf }
)(SmurfList);
