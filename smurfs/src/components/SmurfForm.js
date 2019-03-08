import React from 'react';

const SmurfForm = (props) => {
  const handleClick = addSmurf => (event) => {
    event.preventDefault();
    let name = '';
    let age = '';
    let height = '';
    event.target.parentNode.childNodes.forEach((childNode) => {
      if (childNode.name === 'name') {
        name = childNode.value;
      } else if (childNode.name === 'age') {
        age = childNode.value;
      } else if (childNode.name === 'height') {
        height = childNode.value;
      }
    });
    if (name && age && height) {
      addSmurf(name, age, height);
      event.target.parentNode.childNodes.forEach((childNode) => {
        // eslint-disable-next-line no-param-reassign
        childNode.value = '';
      });
    }
  };

  return (
    <div className="smurf-form-container">
      <h2>Add a new smurf</h2>
      <form className="smurf-form">
        <input
          name="name"
          placeholder="name"
          type="text"
        />
        <input
          name="age"
          placeholder="age"
          type="text"
        />
        <input
          name="height"
          placeholder="height"
          type="text"
        />
        <button
          type="button"
          onClick={handleClick(props.addSmurf)}
          className="add"
        >
          Add to the village
        </button>
      </form>
    </div>
  );
};

export default SmurfForm;
