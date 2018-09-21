import React from 'react';

const SmurfForm = (props) => {
  return (
    <form>
      Name:
      <input
        type="text"
        name="name"
        placeholder="Name"
        //Notice below, we're filling in the name prop thats part of the inputData prop object we set in App.js
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
        placeholder="50"
        value={props.inputData.height}
        onChange={props.handleInput}
      />
      <button onClick={props.handleAdd}>Add Smurf</button>
    </form>
  );
};

export default SmurfForm;