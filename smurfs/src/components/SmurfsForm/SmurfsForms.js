import React from 'react';
import './SmurfsForm.css';

const SmurfsForm = props => {
  return (
    <div className="SmurfForm">
      <form onSubmit={props.submit} className="my-form">
        <input
          onChange={props.change}
          placeholder="name"
          value={props.name}
          name="name"
        />
        <input
          onChange={props.change}
          placeholder="age"
          value={props.age}
          name="age"
        />
        <input
          onChange={props.change}
          placeholder="height"
          value={props.height}
          name="height"
        />
        <button type="submit">Create Smurf!</button>
      </form>
    </div>
  );
}

export default SmurfsForm;