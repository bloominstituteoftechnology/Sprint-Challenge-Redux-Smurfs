import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

class AddSmurfForm extends React.Component {
  state = {
    
      name: '',
      age: '',
      height: '',
    
  }
  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <h3>Add a Smurf:</h3>
        <form>
          <input onChange={this.inputHandler} type="text" name="name" placeholder="name"/>
          <input onChange={this.inputHandler} type="text" name="age" placeholder="age"/>
          <input onChange={this.inputHandler} type="text" name="height" placeholder="height"/>
          <button onClick={() => this.props.addSmurf(this.state)}>Add</button>
        </form>
      </div>
    );
    
  }
}
 
export default connect(null, {addSmurf})(AddSmurfForm);
