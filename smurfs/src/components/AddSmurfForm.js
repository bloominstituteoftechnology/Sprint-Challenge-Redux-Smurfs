import React, {Component} from "react";
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class AddSmurfForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        height: '',
      }
    }
  
    inputHandler = (event) => {
      this.setState({ [event.target.name ]: event.target.value })
    }
  
    submitHandler = (event) => {
      event.preventDefault();
      this.props.addSmurf(this.state);
    }
  
    render() {
      return (
        <form className="form-container" onSubmit={this.submitHandler}>
          <input name="name" value={this.state.name} onChange={this.inputHandler} placeholder=" Name" />
          <input name="age" value={this.state.age} onChange={this.inputHandler} placeholder=" Age" />
          <input name="height" value={this.state.height} onChange={this.inputHandler} placeholder=" Height" />
          <button type="submit">Add Smurf</button>
        </form>
      );
    }
  };
  
  const mapStateToProps = () => {
    return {}
  }
  
  export default connect(mapStateToProps, { addSmurf : addSmurf })(AddSmurfForm);