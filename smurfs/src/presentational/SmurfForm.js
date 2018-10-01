import React from 'react';


const  SmurfForm = props =>  {
  

  
    return (
      <div className="SmurfForm">
        <form onSubmit={props.handleAddSmurf}>
          <input
            onChange={props.handleInput}
            placeholder="name"
            value={props.state.name}
            name="name"
          />
          <input
            onChange={props.handleInput}
            placeholder="age"
            value={props.state.age}
            name="age"
          />
          <input
            onChange={props.handleInput}
            placeholder="height"
            value={props.state.height}
            name="height"
          />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
}

export default SmurfForm;