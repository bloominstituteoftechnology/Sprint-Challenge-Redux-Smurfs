import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
  state = {
    name: '',
    age: '',
    height: '',
  }

  updateNewSmurf = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitNewSmurf = (event) => {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitNewSmurf}>
          <input type="text" placeholder='Name' onChange={this.updateNewSmurf} name='name' value={this.state.name} />
          <input type="number" placeholder='Age' onChange={this.updateNewSmurf} name='age' value={this.state.age} />
          <input type="number" placeholder='Height' onChange={this.updateNewSmurf} name='height' value={this.state.height} />
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default connect(null, { addSmurf })(SmurfForm);