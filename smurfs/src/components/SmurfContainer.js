import React from 'react';

const SmurfContainer = (props) => {
  return (
    <form>
      Name:
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={props.inputData.name}
        onChange={props.handleInput}
      />
      Age:
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={props.inputData.age}
        onChange={props.handleInput}
      />
      Height:
      <input
        type="number"
        name="height"
        placeholder="Height"
        value={props.inputData.height}
        onChange={props.handleInput}
      />
      <button onClick={props.handleAdd}>Add Smurf</button>
    </form>
  );
};

export default SmurfContainer;