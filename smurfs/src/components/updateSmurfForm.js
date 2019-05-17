import React from 'react';

const UpdateSmurfForm = props => {
  return (
    <form>
      <input placeholder={props.smurf.name} />
      <input placeholder={props.smurf.age} />
      <input placeholder={props.smurf.height} />
    </form>
  );
};

export default UpdateSmurfForm;