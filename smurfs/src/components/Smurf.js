import React, { Component } from 'react';

class Smurf extends Component {
  state = {
    name: this.props.smurf.name,
    age: this.props.smurf.age,
    height: this.props.smurf.height,
    id: this.props.smurf.id,
    edit: false
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditSmurf = () => {
    this.setState({ edit: true });
  };

  updateSmurf = e => {
    e.preventDefault();
    const { name, age, height, id } = this.state;
    this.props.handleUpdateSmurf({ id, name, age, height });
    this.setState({ edit: false });
  };

  render() {
    const { name, age, height, id, edit } = this.state;
    const { handleDeleteSmurf } = this.props;
    return (
      <div className="card">
        {edit ? (
          <React.Fragment>
            <input value={name} name="name" onChange={this.handleInputChange} />
            <input
              value={height}
              name="height"
              onChange={this.handleInputChange}
            />
            <input value={age} name="age" onChange={this.handleInputChange} />
            <div className="btns">
              <button className="btn btn-edit" onClick={this.updateSmurf}>
                Update
              </button>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3>{name}</h3>
            <p>{height}</p>
            <p>{age}</p>
            <div className="btns">
              <button
                className="btn btn-remove"
                onClick={() => handleDeleteSmurf(id)}
              >
                Remove
              </button>
              <button className="btn btn-edit" onClick={this.handleEditSmurf}>
                Edit
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Smurf;
