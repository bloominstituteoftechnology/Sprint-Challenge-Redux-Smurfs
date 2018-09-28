import React from 'react';
import '../components/App.css';

function SmurfForm(props) {
  console.log(props.input.editId);
  return (
    <form className="add-smurf">
      <h2>{props.input.editId ? 'Edit Smurf' : 'Add Smurf'}</h2>
      <div className="smurf-label">
        <label className="smurf-detail">Name</label>
        <input
          name="name"
          type="text"
          placeholder="Smurf name"
          value={props.input.name}
          onChange={props.handleChange}
        />
      </div>
      <div className="smurf-label">
        <label className="smurf-detail">Age</label>
        <input
          name="age"
          type="text"
          placeholder="Smurf age"
          value={props.input.age}
          onChange={props.handleChange}
        />
      </div>
      <div className="smurf-label">
        <label className="smurf-detail">Height</label>
        <input
          name="height"
          type="text"
          placeholder="Smurf height"
          value={props.input.height}
          onChange={props.handleChange}
        />
      </div>
      <button className="button" onClick={props.handleClick}>
        {props.input.editId ? 'Edit Smurf' : 'Add Smurf'}
      </button>
    </form>
  );
}

export default SmurfForm;
