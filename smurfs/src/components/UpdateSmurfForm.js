import React from 'react';
import { updateSmurf } from '../actions';
import { connect } from 'react-redux';

class UpdateSmurfForm extends React.Component {
  state = {
    id: this.props.smurf.id,
    name: this.props.smurf.name,
    age: this.props.smurf.age,
    height: this.props.smurf.height,
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.updateSmurf(this.state.id, {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    });
  }

  onChange = (event) => {
    let { name, value } = event.target;
    if (event.target.type === 'number') {
      value = Number(value);
    }
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <div>Update Friend</div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} type='text' placeholder='name' name='name' value={this.state.name} require='true' />
          <input onChange={this.onChange} type='number' placeholder='age' name='age' value={this.state.age} require='true' />
          <input onChange={this.onChange} type='number' placeholder='height' name='height' value={this.state.height} require='true' />
          <button type='submit'>Update Friend</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { updateSmurf})(UpdateSmurfForm);