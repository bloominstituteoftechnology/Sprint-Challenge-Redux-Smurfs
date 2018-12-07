import React from 'react';

class SmurfForm extends React.Component {
  state = {
    id: '',
    name: '',
    age: '',
    height: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addSmurf({
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height,
    });
    this.setState({
      id: '',
      name: '',
      age: '',
      height: '',
    });
  }

  render() {
    if (this.props.addingSmurf) {
      return <h3>Adding a Smurf ... </h3>
    } else {
      return (
        <div className="add-smurf-form">
          <h3>Add a Smurf</h3>
          <form action="submit" onSubmit={this.onSubmit}>
            <input
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              type="text"
              placeholder="Add smurf's name"
            />
            <input
              name="age"
              value={this.state.age}
              onChange={this.onChange}
              type="text"
              placeholder="Add smurf's age"
            />
            <input
              name="height"
              value={this.state.height}
              onChange={this.onChange}
              type="text"
              placeholder="Add smurf's height"
            />
            <button type="submit">Add</button>
          </form>
        </div>
      );
    }
  }
}

export default SmurfForm;