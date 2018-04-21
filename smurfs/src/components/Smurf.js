import React, { Component } from "react";
import "./Smurf.css";

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.smurf.name,
      age: this.props.smurf.age,
      height: this.props.smurf.height,
      id: this.props.smurf.id,
      delete: this.props.delete,
      edit: this.props.edit,
      editing: false
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onEditButton = () => {
    if (this.state.editing) {
      const smurf = {name: this.state.name, age: this.state.age, height: this.state.height, id: this.state.id};
      this.state.edit(smurf);
    }
    this.setState({ editing: !this.state.editing });
  };

  render() {
    return (
      <div className="Smurf-container">
        <h3>{this.state.name}</h3>
        <p>{this.state.age}</p>
        <p>{this.state.height}</p>
        <div
          className={`Smurf-inputs${
            this.state.editing ? "" : " Smurf-nodisplay"
          }`}
        >
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.onInputChange}
          />
          <input
            type="text"
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.onInputChange}
          />
          <input
            type="text"
            name="height"
            value={this.state.height}
            placeholder="Height"
            onChange={this.onInputChange}
          />
        </div>
        <div className="Smurf-btn-container">
          <button onClick={this.onEditButton}>{this.state.editing ? 'Accept Changes' : 'Edit'}</button>
          <button onClick={() => this.state.delete(this.state.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Smurf;
