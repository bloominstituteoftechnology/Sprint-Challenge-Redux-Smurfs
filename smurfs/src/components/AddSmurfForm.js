import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurfForm extends React.Component {
  state = {
    name: '',
    age: '',
    height: '',
  }

  addSmurf = (event) => {
    event.preventDefault();
    const newSmurf = Object.assign({}, this.state);
    this.props.addSmurf(newSmurf);
    this.setState({
      name: '',
      age: '',
      height: '',
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addSmurf}>
          <input
            name="name"
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            name="age"
            placeholder="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input
            name="height"
            placeholder="height"
            onChange={this.handleChange}
            value={this.state.height}
          />
          <button type="submit" >Add New Smurf</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addSmurf })(AddSmurfForm);