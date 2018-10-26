import React, { Component } from 'react';

class Smurf extends Component {
  state = {
    edit: false
  };

  render() {
    const { smurf, handleDeleteSmurf, handleEditSmurf } = this.props;
    return (
      <div className="card">
        <h3>{smurf.name}</h3>
        <p>{smurf.height}</p>
        <p>{smurf.age}</p>
        <div className="btns">
          <button
            className="btn btn-remove"
            onClick={() => handleDeleteSmurf(smurf.id)}
          >
            Remove
          </button>
          <button
            className="btn btn-edit"
            onClick={() =>
              handleEditSmurf({
                id: smurf.id,
                name: smurf.name,
                age: smurf.age,
                height: smurf.height
              })
            }
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default Smurf;
