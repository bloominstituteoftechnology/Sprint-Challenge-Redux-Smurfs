import React from "react";
import { connect } from "react-redux";
import Smurfs from "../components/Smurfs";
import SmurfForm from "../components/SmurfForm";
import { fetchingSmurfs, addSmurf, deleteSmurf } from "../actions";

class SmurfsListView extends React.Component {
  componentDidMount() {
    this.props.fetchingSmurfs();
  }

  addSmurfHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log("inListView", this.props.smurfs);
    if (this.props.fetchingFriends) {
      return (
        <div className="fetching">
          <h1>Hold On.. We're Summoning Your Crew.. </h1>
        </div>
      );
    } else {
      return (
        <div>
          <Smurfs
            smurfs={this.props.smurfs}
            deleteSmurf={this.props.deleteSmurf}
          />

          <SmurfForm
            smurfs={this.props.smurfs}
            addSmurf={this.props.addSmurf}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs,
    addSmurf: state.addSmurf,
    deleteSmurf: state.deleteSmurf
  };
};

export default connect(
  mapStateToProps,
  {
    fetchingSmurfs,
    addSmurf,
    deleteSmurf
  }
)(SmurfsListView);
