import React from 'react';
import {updateSmurf} from '../actions';
import {connect} from 'react-redux';

class UpdateSmurfForm extends React.Component {
  state = {
    name: this.props.smurf.name,
    age: this.props.smurf.age,
    height: this.props.smurf.height,
    id: this.props.smurf.id
  }
  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }
  handleSubmit = () => {
    this.props.updateShowFormState();
    this.props.updateSmurf(this.state);
  }
  render() {
    return (
      <div>
        <input onChange={this.handleOnChange} type="text" name="name" placeholder="Name" defaultValue={this.props.smurf.name} />
        <input onChange={this.handleOnChange} type="text" name="age" placeholder="Age" defaultValue={this.props.smurf.age} />
        <input onChange={this.handleOnChange} type="text" name="height" placeholder="Height" defaultValue={this.props.smurf.height} />
        <button onClick={this.handleSubmit}>Update Smurf</button>
      </div>
    )
  }
}

export default connect(null, {updateSmurf})(UpdateSmurfForm);