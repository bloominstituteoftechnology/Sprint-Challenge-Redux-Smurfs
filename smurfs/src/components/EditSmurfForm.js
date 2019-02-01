import React from "react";
import { editSmurf } from "../actions";
import { connect } from "react-redux";

class EditSmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      id: ""
    };
  }

  handleEditChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  editHandler = event => {
    event.preventDefault();
    this.props.editSmurf(this.state.id, this.state);
    this.setState({
      name: "",
      age: "",
      height: "",
      id: ""
    });
  };

  render() {
    const editInput = (name, type = "text") => (
      <input
        autoComplete="off"
        className="input-section"
        type={type}
        name={name}
        placeholder={`Edit ${name[0].toUpperCase() + name.slice(1)}`}
        value={this.state[name]}
        onChange={this.handleEditChange}
      />
    );
    return (
      <div>
        <form onSubmit={this.editHandler} autoComplete="nope">
          {editInput("name")}
          {editInput("age", "number")}
          {editInput("height")}
          {editInput("id", "number")}
          <button>Edit Smurf</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { editSmurf }
)(EditSmurfForm);
