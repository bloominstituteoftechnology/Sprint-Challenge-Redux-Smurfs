import React from "react";

const SmurfForm = props => {
  return (
    <div className="SmurfForm">
      <input
        onChange={props.change}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input onChange={props.change} type="text" name="age" placeholder="Age" />
      <input
        onChange={props.change}
        type="text"
        name="height"
        placeholder="Height"
      />
      <button onClick={props.submit}>Create Smurf</button>
    </div>
  );
};

export default SmurfForm;
