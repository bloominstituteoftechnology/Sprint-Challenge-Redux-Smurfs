import React from "react";
import { connect } from "react-redux";
import { deleteSmurf, updateSmurf } from "../actions/index";

class Smurf extends React.Component {
  constructor() {
    super();
    this.state = {
      updatedName: "",
      updatedAge: "",
      updatedHeight: "",
      update: false
    };
  }
  toggleUpdate = event => {
    event.preventDefault();
    this.setState({ update: !this.state.update });
  };
  inputUpdate = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  updateSmurf = event => {
    event.preventDefault();
    let updated = {
      name: this.state.updatedName,
      age: this.state.updatedAge,
      height: this.state.updatedHeight
    };
    this.props.updateSmurf(updated, this.props.smurf.id);
  };
  render() {
    return (
      <div>
        <div>
          <p>
            <strong>Name:</strong> {this.props.smurf.name}
          </p>
          <p>
            <strong>Age:</strong> {this.props.smurf.age}
          </p>
          <p>
            <strong>Height:</strong> {this.props.smurf.height}cm
          </p>
        </div>
        {this.state.update ? (
          <form>
            <input
              onChange={this.inputUpdate}
              placeholder="edit name"
              type="text"
              value={this.state.editedName}
              name="updatedName"
            />
            <input
              onChange={this.inputUpdate}
              placeholder="edit age"
              type="number"
              value={this.state.editedName}
              name="updatedAge"
            />
            <input
              onChange={this.inputUpdate}
              placeholder="edit height"
              type="number"
              value={this.state.editedName}
              name="updatedHeight"
            />
            <button onClick={this.updateSmurf}>Update Smurf</button>
          </form>
        ) : null}
        <button onClick={this.toggleUpdate}>Update Smurf</button>
        <button onClick={() => this.props.deleteSmurf(this.props.smurf.id)}>
          Delete Smurf
        </button>

        <form />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { deleteSmurf, updateSmurf }
)(Smurf);
