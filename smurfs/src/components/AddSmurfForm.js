import React from 'react';

const SmurfForm = (props) => {
  // console.log(props);
  return (
    <form onSubmit={props.handleAddSmurf}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={props.smurfFormInputs.name}
        onChange={props.handleInput}
      />
      <label>Age:</label>
      <input
        type="number"
        name="age"
        value={props.smurfFormInputs.age}
        onChange={props.handleInput}
      />
      <label>Height:</label>
      <input
        type="text"
        name="height"
        value={props.smurfFormInputs.height}
        onChange={props.handleInput}
      />
      <button type="submit" value="Add Smurf">
        Add Smurf
      </button>
    </form>
  );
};

export default SmurfForm;
