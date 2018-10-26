import React from "react";

import Smurf from "./smurf";

const Smurfs = props => {
  return (
    <div className="container">
      <ul>
        {props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })}
      </ul>
      <form type="submit">
        Name:
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={props.newSmurf.name}
          onChange={props.handleChanges}
        />
        Age:
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={props.newSmurf.age}
          onChange={props.handleChanges}
        />
        Height:
        <input
          type="text"
          placeholder="height"
          name="height"
          value={props.newSmurf.height}
          onChange={props.handleChanges}
        />
        <button onClick={props.addSmurf}> Add Smurf</button>
      </form>
    </div>
  );
};

export default Smurfs;