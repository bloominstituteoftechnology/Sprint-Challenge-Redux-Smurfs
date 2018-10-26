import React from "react";

const SmurfForm = ({
  newSmurf,
  handleInputChange,
  handleOnClick,
  showUpdateForm
}) => {
  return (
    <form>
      <input
        className="input"
        value={newSmurf.name}
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleInputChange}
      />
      <input
        className="input"
        value={newSmurf.age}
        name="age"
        type="text"
        placeholder="Age"
        onChange={handleInputChange}
      />
      <input
        className="input"
        value={newSmurf.height}
        name="height"
        type="text"
        placeholder="Height"
        onChange={handleInputChange}
      />
      <button onClick={handleOnClick} type="button">
        {showUpdateForm ? "Submit Update" : "Submit New Smurf"}
      </button>
    </form>
  );
};

export default SmurfForm;
