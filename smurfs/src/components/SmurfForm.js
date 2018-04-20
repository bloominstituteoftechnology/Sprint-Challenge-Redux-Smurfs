import React from 'react';

export const SmurfForm = props => {
  return ( 
    // Set up input fields that control
    // the state of our App component  
    <div className="smurfForm">
      <form className="smurfForm_inputFields">
        <input
          type="text"
          name="name"
          placeholder="name"
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
          placeholder="height"
          value={props.formInput.height}
          onChange={props.updateInputState}
        />
      </form>
      <button className="smurfForm_button" onClick={(e) => {
        props.addSmurf(props.formInput);
        props.resetInputForm();
      }}>Add Smurf</button>
    </div>
  )
}