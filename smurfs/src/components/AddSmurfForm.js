import React from 'react';

const FormInput = props => {
  return (
    <div className="add-smurf-form">
    <form onSubmit={props.addNewSmurf}>
      <input 
        onChange={props.handleChange}
        name="name"
        value={props.name}
        type="text"
        placeholder="Name"
       />
       <input 
        onChange={props.handleChange}
        name="age"
        value={props.age}
        type="number"
        placeholder="Age"
       />
       <input 
        onChange={props.handleChange}
        name="height"
        value={props.height}
        type="height"
        placeholder="Height"
       />
       <button onClick={props.addNewSmurf}>Add Smurf</button>
       </form>
    </div>
  );
};

export default FormInput;