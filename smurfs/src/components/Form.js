import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    console.log('in form', this.props);
    if (this.props.smurf) {
        this.state = {
          id: this.props.smurf.id,
          name: this.props.smurf.name,
          age: this.props.smurf.age,
          height: this.props.smurf.height,
        }
    } else {
      this.state = {
        id: null,
        name: '',
        age: '',
        height: '',
      }
    }
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.id) {
      const smurf = {
        id: this.state.id,
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
      }; 
      this.props.submit(smurf);
      this.setState({
        id: null,
        name: '',
        age: '',
        height: '',
      });
    }
      const smurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
      }
    this.props.submit(smurf);
    this.setState({
      id: null,
      name: '',
      age: '',
      height: '',
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <input
        name='name'
        type='text'
        value={this.state.name}
        placeholder='name'
        onChange={this.handleInput}
      />
      <input
        name='age'
        type='number'
        value={this.state.age}
        placeholder='age'
        onChange={this.handleInput}
      />
      <input
        name='height'
        type='text'
        value={this.state.height}
        placeholder='height in cm'
        onChange={this.handleInput}
      />
      <button className='form button'>{this.props.smurf ? `save changes` : `add smurf`}</button>
      </form>
    )
  }
}

export default Form;