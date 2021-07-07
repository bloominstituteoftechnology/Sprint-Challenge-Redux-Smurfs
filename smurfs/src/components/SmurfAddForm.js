import React from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';
import './App.css';

class SmurfAddForm extends React.Component {
  state = {
    name: '',
    age: '',
    height: ''
  }  

  addSmurf = e => {
    e.preventDefault();
    if (this.state.name && this.state.age && this.state.height) {
      this.props.addSmurf(this.state);  
      this.setState({
        name: '',
        age: '',
        height: ''
      })    
    } else {
      alert('Holy Smurfs, Gargamel must have made you forget to fill out all the forms! Fill them out!');
    }
  }

  handleChange = e => {
    this.setState ({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className='add-a-smurf'>
        <form>

          <input 
            name='name'
            value={this.state.name}
            placeholder='Name...'
            type='text'
            onChange={this.handleChange}
          />

          <input 
            name='age'
            value={this.state.age}
            placeholder='Age...'
            type='number'
            onChange={this.handleChange}
          />

          <input 
            name='height'
            value={this.state.height}
            placeholder='How tall am I... Number Only!'
            type='text'
            onChange={this.handleChange}
          />   

          <button onClick={this.addSmurf}>POWA OF FRIENDSHIP!</button>

        </form>
      </div>
    )
    
  }
}

export default connect(null, {addSmurf})(SmurfAddForm); 