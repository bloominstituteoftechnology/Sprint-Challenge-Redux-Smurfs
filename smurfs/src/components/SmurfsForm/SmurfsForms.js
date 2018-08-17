import React, { Component } from 'react';

class SmurfsForm extends Component {
  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf} className="my-form">
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            // value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            // value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            // value={this.state.height}
            name="height"
          />
          <button type="submit">Create Smurf!</button>
        </form>
      </div>
    );
  }
}

export default SmurfsForm;