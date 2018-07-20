import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions'

class SmurfForm extends Component {
  constructor(props) {
    super();
    this.state= {
      name: '',
      age: '',
      height: ''
    }
  }

  addSmurfHandler = () => {
    const { name, age, height } = this.state;
    const newSmurf = {name,age,height};
    this.props.createSmurf(newSmurf);
    this.setState({name: '', age: '', height: ''});
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return(
      <div>
        <input
          value={this.state.smurfName}
          onChange={this.onChangeHandler}
          placeholder="Smurf Name"
          name="name"
        />
        <input
          value={this.state.smurfHeight}
          onChange={this.onChangeHandler}
          placeholder="Smurf Height"
          name="height"
        />
        <input
          value={this.state.smurfAge}
          onChange={this.onChangeHandler}
          placeholder="Smurf Age"
          name="age"
        />
        <button onClick={this.addSmurfHandler}>Add Smurf</button>
      </div>
    )
  }
}

export default connect(null, { createSmurf })(SmurfForm);
