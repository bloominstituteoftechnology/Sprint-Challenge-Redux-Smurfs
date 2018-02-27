import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSmurf, deleteSmurf } from '../actions';
import './App.css';

class Smurf extends Component {
  state = {
    name: '',
    age: '',
    height: '',
    buttonPressed: false,
  };

  updateState = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  addSmurf = event => {
    event.preventDefault();
    const editedSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    };

    this.props.updateSmurf(editedSmurf, this.props.smurf.id);

    this.setState({
      name: '',
      age: '',
      height: '',
      buttonPressed: false,
    });
  };

  render() {
    return (
      <div>{this.state.buttonPressed ? this.editForm() : this.smurfData()}</div>
    );
  }

  editForm = () => {
    return (
      <div className="each__smurf">
        <div className="smurf__form-edit">
          <form type="submit" onSubmit={this.addSmurf}>
            <div className="form__text">Edit your Smurf</div>
            <input
              type="text"
              className="form__input"
              placeholder="Name"
              onChange={this.updateState}
              name="name"
              value={this.state.name}
            />
            <input
              type="number"
              className="form__input"
              placeholder="Age"
              onChange={this.updateState}
              name="age"
              value={this.state.age}
            />
            <input
              type="number"
              className="form__input"
              placeholder="Height"
              onChange={this.updateState}
              name="height"
              value={this.state.height}
            />
            <input type="submit" value="submit" className="edit-buttons" />
          </form>
        </div>
      </div>
    );
  };

  smurfData = () => {
    return (
      <div className="each__smurf">
        <ul className="smurf_ul">
          <li className="smurf__data">{this.props.smurf.name}</li>
          <li className="smurf__data">Age: {this.props.smurf.age} years</li>
          <li className="smurf__data">Height: {this.props.smurf.height}cm</li>
          <div>
            <button
              className="buttons"
              onClick={() => {
                this.setState({ buttonPressed: !this.state.buttonPressed });
              }}
            >
              Edit
            </button>
            <button
              className="buttons"
              onClick={() => {
                this.props.deleteSmurf(this.props.smurf, this.props.smurf.id);
              }}
            >
              Delete
            </button>
          </div>
        </ul>
      </div>
    );
  };
}

// Don't need this either /////////
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, {
  updateSmurf,
  deleteSmurf,
})(Smurf);
