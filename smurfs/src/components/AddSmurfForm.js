import React from 'react';
import {addSmurf} from '../actions';
import {connect} from 'react-redux';

class AddSmurfForm extends React.Component {
  state = {
    name: '',
    age: '',
    height: ''
  }
  onChangeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit = () => {
    this.props.addSmurf(this.state);
  }
  render() {
    return (
      <form>
        <input onChange={this.onChangeHandler} type="text" name="name" placeholder="Name" />
        <input onChange={this.onChangeHandler} type="text" name="age" placeholder="Age" />
        <input onChange={this.onChangeHandler} type="text" name="height" placeholder="Height" />
        <button onClick={this.handleSubmit} type="submit">Create Smurf</button>
      </form>
    )
  }
}

export default connect(null, {addSmurf})(AddSmurfForm);