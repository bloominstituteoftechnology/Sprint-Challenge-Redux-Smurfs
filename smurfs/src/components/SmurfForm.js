import React from 'react'

const SmurfForm = ({ newSmurf, handleInputChange, handleAddSmurf }) => {
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
        <button onClick={handleAddSmurf} type="button">
          Add New Smurf
        </button>
    </form>
  )
}

export default SmurfForm
