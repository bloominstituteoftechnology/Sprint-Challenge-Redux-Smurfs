import React from "react";

const UpdateSmurfForm = props => {
  return (
    <form>
      <input placeholder={props.smurf.name} />
      <input placeholder={props.smurf.height} />
      <input placeholder={props.smurf.age} />
    </form>
  );
};
export default UpdateSmurfForm;
