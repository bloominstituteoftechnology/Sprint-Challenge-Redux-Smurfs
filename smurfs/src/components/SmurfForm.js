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
      </form>
    </div>
  )
}