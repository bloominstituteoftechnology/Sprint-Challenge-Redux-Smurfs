import React from "react";

const AddSmurfForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    if (props.isEditing) {
      props.updateToSmurfs();
    } else {
      props.addToSmurfs({
        name: props.name,
        age: props.age,
        height: props.height
      });
    }
  };
  return (
    <form className="addForm">
      <h1>{props.isEditing ? "Edit Smurf" : "Add a Smurf"}</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={props.handleInput}
        value={props.name}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        onChange={props.handleInput}
        value={props.age}
      />
      <input
        type="text"
        name="height"
        placeholder="Height"
        onChange={props.handleInput}
        value={props.height}
      />
      <br />
      <button onClick={handleSubmit}>
        {props.isEditing ? "Edit Smurf!" : "Add Smurf!"}
      </button>
    </form>
  );
};

export default AddSmurfForm;
