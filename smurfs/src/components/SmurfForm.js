import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addSmurfs } from '../actions';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  };
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, height } = this.state;
    this.props.addSmurfs({ name, age, height });
    this.setState({ name: '', age: '', height: ''});
  };

  render(){
    console.log('SmurfForm.js props', this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          className="input"
          type="text" 
          value={this.state.name} 
          name="name" 
          placeholder="name" 
          onChange={this.handleInputChange}
        />
        <input 
          className="input"
          type="text" 
          value={this.state.age} 
          name="age" 
          placeholder="age" 
          onChange={this.handleInputChange}
        />
        <input 
          className="input"
          type="text" 
          value={this.state.height} 
          name="height" 
          placeholder="height" 
          onChange={this.handleInputChange}
        />
        <button>Add New Smurf</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    savingSmurfs: state.savingSmurfs,
  }
}

export default connect (mapStateToProps, { addSmurfs })(SmurfForm);