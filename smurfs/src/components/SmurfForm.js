import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class SmurfForm extends React.Component {

  constructor() {

    super();

    this.state = {

      name: '',
      age: 0,
      height: 0

    }

  }

  handleChange = e => {

    this.setState({

      [e.target.name]: e.target.value

    })

  }

  handleSubmission = e => {

    e.preventDefault();

    this.props.addSmurf({

      name: this.state.name,
      age: this.state.age,
      height: this.state.height + 'cm'

    });

    this.setState({

      name: '',
      age: 0,
      height: 0

    })

    return false;

  }

  render() {

    return (

      <form onSumbit={this.handleSubmission} className='smurf-form'>

        <span>Name: </span><input type='text' name='name' onChange={this.handleChange} placeholder='name' value={this.state.name} />
        <span>Age: </span><input type='number' name='age' onChange={this.handleChange} value={this.state.age} />
        <span>Height (in cm): </span><input type='number' name='height' onChange={this.handleChange} value={this.state.height} />
        <button onClick={this.handleSubmission}>Add smurf!</button>

      </form>

    );

  }

}

export default connect(null, { addSmurf })(SmurfForm);
