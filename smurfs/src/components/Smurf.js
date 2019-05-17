import React from "react";

const Smurf = props => {
  //   console.log(props);
  return (
    <div>
      <p>{props.smurf.name}</p>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <button onClick={() => props.deleteHandle(props.smurf.id)}>
        murder this smurf
      </button>
      <button onClick={() => props.editHandle(props.smurf.id)}>
        edit smurf
      </button>
    </div>
  );
};
export default Smurf;
