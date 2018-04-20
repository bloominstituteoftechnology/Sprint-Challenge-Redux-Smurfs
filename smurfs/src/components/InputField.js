import React from "react";

const InputField = props => {
  console.log("chk input.props", props.inputState.name);
  return (
    <div className="InputField">
      <input
        type="text"
        name="name"
        placeholder="name"
        value={props.inputState.name}
        onChange={props.onChange}
      />

      <input
        type="number"
        name="age"
        placeholder="age"
        value={props.inputState.age}
        onChange={props.onChange}
      />

      <input
        type="text"
        name="height"
        placeholder="height"
        value={props.inputState.height}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputField;
