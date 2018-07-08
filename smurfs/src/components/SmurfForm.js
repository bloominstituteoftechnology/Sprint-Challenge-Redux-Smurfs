import React from 'react';

export const SmurfForm = props => {
  return (
    <div className="smurfForm">
      <h2>New Smurf Form</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Smurf Name"
          value={props.formInput.name}
          onChange={props.updateInputState}
        />
        <input
          type="number"
          name="age"
          placeholder="age"
          value={props.formInput.age}
          onChange={props.updateInputState}
        />
        <input
          type="text"
          name="height"
          placeholder="height in ft"
          value={props.formInput.height}
          onChange={props.updateInputState}
        />
      </form>
      <button className="newSmurfCreate" onClick={(e) => {
        props.addSmurf(props.formInput);
        props.resetInputForm();
      }}>Add New Smurf</button>
    </div>
  )
}