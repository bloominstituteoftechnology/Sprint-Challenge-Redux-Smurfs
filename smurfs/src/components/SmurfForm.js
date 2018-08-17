import React from 'react';

const SmurfForm = props => {
  const { name, age, height } = props.current;
  return (
    <div className="smurf-form">
      <form onSubmit={props.addSmurf}>
        <input
          onChange={props.onChange}
          placeholder="name"
          value={name}
          name="name"
          autoComplete="off"
        />
        <input
          onChange={props.onChange}
          placeholder="age"
          value={age}
          name="age"
          autoComplete="off"
          pattern="^\d*$"
        />
        <input
          onChange={props.onChange}
          placeholder="height"
          value={height}
          name="height"
          autoComplete="off"
        />
        <button type="submit">Add to the village</button>
      </form>
    </div>
  );
}

export default SmurfForm;
