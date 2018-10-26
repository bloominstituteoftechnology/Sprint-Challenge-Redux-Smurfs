import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf } from "../actions";

import SmurfList from "../components/SmurfList";
import SmurfForm from "../components/SmurfForm";

const blankFormValues = {
  name: "",
  age: "",
  height: ""
};

class SmurfContainer extends Component {
  constructor() {
    super();

    this.state = {
      newSmurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [event.target.name]: event.target.value
      }
    });
  };

  handleAddSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
    this.setState({
      newSmurf: blankFormValues
    });
  };

  render() {
    return (
      <div className="main-content">
        <SmurfList smurfs={this.props.smurfs} />
        <SmurfForm
          handleInputChange={this.handleChange}
          newSmurf={this.state.newSmurf}
          handleAddSmurf={this.handleAddSmurf}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf }
)(SmurfContainer);
