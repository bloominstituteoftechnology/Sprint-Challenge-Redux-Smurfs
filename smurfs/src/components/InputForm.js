import React from "react";

export default function InputForm(props) {
  return (
    <div className="form">
      <div className="instructions">
        <h2>Instructions</h2>
        <h4>To Add Smurf:{' '}Enter name, age, and height and click "Add Smurf"</h4>
        <h4>To Delete Smurf:{' '}Enter name, age, and height and click "Delete Smurf"</h4>
        <h4>To Edit Smurf:{' '}Enter ID, new name, age and height and click "Edit Smurf"</h4>

      </div>
      <form onSubmit={props.onSubmitAddHandler}>
        <div className="inputs">
          <input
            onChange={props.inputChangeHandler}
            type="text"
            value={props.name}
            placeholder="name"
            name="name"
          />

          <input
            onChange={props.inputChangeHandler}
            type="text"
            value={props.age}
            placeholder="age"
            name="age"
          />

          <input
            onChange={props.inputChangeHandler}
            type="text"
            value={props.height}
            placeholder="height"
            name="height"
          />

          <input
            onChange={props.inputChangeHandler}
            type="number"
            value={props.id}
            placeholder="id"
            name="id"
          />
        </div>

        <div className="buttons">
          <button className="button">Add Smurf</button>
          <button onClick={props.smurfDeleter} className="button">
            Delete Smurf
          </button>
          <button onClick={props.smurfEditer} className="button">
            Edit Smurf
          </button>
        </div>
      </form>
    </div>
  );
}
