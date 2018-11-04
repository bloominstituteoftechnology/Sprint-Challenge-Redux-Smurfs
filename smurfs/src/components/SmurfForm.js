import React from 'react';
import './App.css';
import SelectedSmurf from './SelectedSmurf';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

class SmurfForm extends React.Component {
  state = {
    name: '',
    age: '',
    height: '',
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleAddSmurf = () => {
    const { name, age, height } = this.state;
    createSmurf({ name, age, height });
    this.setState({ name: '', age: '', height: ''});
  };

  render() {
    return (
      <div className="smurfFormContainer">
        <div className="SmurfForm">
          <form 
            className="formFields"
            onSubmit={this.handleAddSmurf}>
            <h2>Please smurf all your Smurf info here</h2>
            <input
              className='inputFields'
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              type="text"
              name="name"
            />
            <input
              className='inputFields'
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              type="text"
              name="age"
            />
            <input
              className='inputFields'
              onChange={this.handleInputChange}
              placeholder="height + unit of measure"
              value={this.state.height}
              type="text"
              name="height"
            />
            <button 
              type="submit"
              className="button">Join Smurf Village</button>

          </form>

         </div>
        </div>  
    );
  }
}

const mapStateToProps = state => {};

export default connect(
  mapStateToProps,
  { createSmurf }
)(SmurfForm);