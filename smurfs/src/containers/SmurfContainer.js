import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf, updateSmurf, deleteSmurf } from "../actions";

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
      },
      showUpdateForm: false
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

  handleUpdate = id => {
    const smurfToUpdate = this.props.smurfs.find(smurf => smurf.id === id);
    this.setState({
      newSmurf: smurfToUpdate,
      showUpdateForm: true
    });
  };

  handleDelete = id => {
    this.props.deleteSmurf(id);
  };

  handleSubmitUpdate = event => {
    event.preventDefault();
    this.props.updateSmurf(this.state.newSmurf);
    this.setState({
      newSmurf: blankFormValues,
      showUpdateForm: false
    });
  };

  render() {
    return (
      <div className="main-content">
        <SmurfList
          smurfs={this.props.smurfs}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
        />
        <SmurfForm
          handleInputChange={this.handleChange}
          newSmurf={this.state.newSmurf}
          handleOnClick={
            this.state.showUpdateForm
              ? this.handleSubmitUpdate
              : this.handleAddSmurf
          }
          showUpdateForm={this.state.showUpdateForm}
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
  { fetchSmurfs, addSmurf, updateSmurf, deleteSmurf }
)(SmurfContainer);
