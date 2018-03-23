import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions'

import './SmurfForm.css'
class SmurfForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    handleInput = event => {
      this.setState({ [event.target.name]: event.target.value});
    }

    submitSmurf = event => {
      event.preventDefault();
      this.props.addSmurf({
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
      });
      this.setState({
        name: '',
        age: '',
        height: '',

      });
    };

        render(){
            return (
              <form className="divInputs" onSubmit={this.submitSmurf}>    
                  <input 
                  required 
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  autoComplete="name"
                  onChange={this.handleInput} 
                  value={this.state.name}
                  />
                  <input 
                  required 
                  name="age"
                  type="number" 
                  placeholder="Enter age" 
                  onChange={this.handleInput}
                  value={this.state.age}
                  />
                  <input
                  required 
                  name="height"
                  type="text" 
                  placeholder="Enter height"
                  onChange={this.handleInput}
                  value={this.state.height}
                  />
                  <button type="submit">Add Friend</button>
              </form>    
            )
        }
}

const mapStateToProps = state => {
  return {
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);