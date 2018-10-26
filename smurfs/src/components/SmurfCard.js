import React from "react";
import { connect } from "react-redux";
import { deleteSmurf, updateSmurf } from "../actions";

class SmurfCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      name: "",
      age: "",
      height: ""
    };
  }

  changeHandler = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  editSmurfFunc = event => {
    event.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.updateSmurf(smurf, this.props.smurf.id);
    this.setState({
      name: "",
      age: "",
      height: "",
      isEditing: false
    });
  };

  handleEditing = e => {
    e.preventDefault();
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    const { props } = this;
    return (
      <div>
        {!this.state.isEditing ? (
          <div className="smurf-card">
            <div className="trash-container">
              <i className="far fa-trash-alt trash" onClick={e => props.deleteSmurf(e, props.smurf.id)} />
              <i className="far fa-edit edit" onClick={e => this.handleEditing(e)} />
            </div>
            <p>Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
          </div>
        ) : (
          <div className="smurf-card">
            <form onSubmit={ev => this.editSmurfFunc(ev)} className="edit-smurf-form">
              <input
                onChange={this.changeHandler}
                name="name"
                placeholder="Name"
                type="input"
                value={this.state.name}
              />
              <input onChange={this.changeHandler} name="age" placeholder="Age" type="input" value={this.state.age} />
              <input
                onChange={this.changeHandler}
                name="height"
                placeholder="Height"
                type="input"
                value={this.state.height}
              />
              <button>submit</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { deleteSmurf, updateSmurf }
)(SmurfCard);
