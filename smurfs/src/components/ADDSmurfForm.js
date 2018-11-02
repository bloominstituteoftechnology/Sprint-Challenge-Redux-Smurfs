import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';
class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      nameText: '',
      ageText: '',
      heightText: ''
    };
  }
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = event => {
    event.preventDefault();
    console.log('this.props.addSmurf', this.props.addSmurf);
    this.props.addSmurf({
      name: this.state.nameText,
      age: this.state.ageText,
      height: this.state.heightText
    });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <button onClick={this.submitHandler}>Add Smurf</button>
        <input
          type="text"
          name="nameText"
          onChange={this.changeHandler}
          value={this.state.nameText}
          placeholder="Smurf name"
        />
        <input
          type="text"
          name="ageText"
          onChange={this.changeHandler}
          value={this.state.ageText}
          placeholder="Smurf age"
        />
        <input
          type="text"
          name="heightText"
          onChange={this.changeHandler}
          value={this.state.heightText}
          placeholder="Smurf height"
        />
      </form>
    );
  }
}
export default connect(
  null,
  { addSmurf }
)(SmurfForm);