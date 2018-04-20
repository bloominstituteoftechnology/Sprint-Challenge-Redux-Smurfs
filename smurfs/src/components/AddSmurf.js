import React, { Component } from 'react';

class AddSmurf extends Component {
  state = {
    newSmurfName: '',
    newSmurfAge: '',
    newSmurfHeight: ''
  };

  render() {
    return (
      <div className='NewSmurf'>
        <h2>New Smurf</h2>
        <input
          className='NewSmurf__Input'
          type='text'
          placeholder='Name'
          name='newSmurfName'
          value={this.state.newSmurfName}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input
          className='NewSmurf__Input'
          type='number'
          placeholder='Age'
          name='newSmurfAge'
          value={this.state.newSmurfAge}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input
          className='NewSmurf__Input'
          type='text'
          placeholder='Height'
          name='newSmurfHeight'
          value={this.state.newSmurfHeight}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <button
          className='NewSmurf__Button'
          onClick={() => {
            this.props.createSmurf({
              name: this.state.newSmurfName,
              age: this.state.newSmurfAge,
              height: this.state.newSmurfHeight
            })
            
            this.setState = {
              newSmurfName: '',
              newSmurfAge: '',
              newSmurfHeight: ''
            }
          }}
        >
          Add Smurf
        </button>
      </div>
    );
  }
}

export default AddSmurf;