import React from "react";

function UpdateSmurf(props) {
  return (
    <div>
      <label>
        Name{" "}
        <input
          type="text"
          name="name"
          onChange={props.onChange}
          value={props.name}
        />
      </label>
      <label>
        Age{" "}
        <input
          type="number"
          name="age"
          onChange={props.onChange}
          value={props.age}
        />
      </label>
      <label>
        Height{" "}
        <input
          type="text"
          name="height"
          onChange={props.onChange}
          value={props.height}
        />
      </label>
      <button onClick={props.onClick}>Submit</button>
    </div>
  );
}

export default UpdateSmurf;
