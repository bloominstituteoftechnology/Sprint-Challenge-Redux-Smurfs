import React from "react";
import { connect } from "react-redux";

import Smurfs from "../components/smurfs";
import { getSmurfs, addSmurf } from "../actions";
import { throws } from "assert";

class SmurfsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newSmurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }
  componentDidMount() {
    this.props.getSmurfs();
  }
  handleChanges = event => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [event.target.name]: event.target.value
      }
    });
  };
  addSmurf = event => {
    this.props.addSmurf(this.state.newSmurf);
  };
  render() {
    if (this.props.fetchingSmurfs) {
      return <h1>Fetching some Smurfs name from the village</h1>;
    }
    return (
      <div>
        <Smurfs
          smurfs={this.props.smurfs}
          newSmurf={this.state.newSmurf}
          handleChanges={this.handleChanges}
          addSmurf={this.addSmurf}
        />
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
    deletingSmurf: state.deletingSmurf,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(SmurfsView);
