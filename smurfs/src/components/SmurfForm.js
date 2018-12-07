import React from 'react';
import { connect } from 'react-redux';

import { addSmurf, updateSmurf } from '../actions';

import './SmurfForm.scss';

class SmurfForm extends React.Component {

  constructor() {

    super();

    this.state = {

      name: '',
      age: 'age',
      height: ''

    }

  }

  componentDidUpdate(prevProps) {

    if (this.props.smurfToUpdate && this.props.smurfToUpdate !== prevProps.smurfToUpdate) {

      this.setState(this.props.smurfToUpdate);

    }

    if (!this.props.smurfToUpdate && prevProps.smurfToUpdate) {

      this.setState({

        name: '',
        age: 'age',
        height: ''

      });

    }

  }

  handleChange = e => {

    this.setState({

      [e.target.name]: e.target.value

    })

  }

  handleSubmission = e => {

    e.preventDefault();

    console.log(this.props.smurfToUpdate);

    if (this.props.smurfToUpdate)
      this.props.updateSmurf(this.state);

    else
      this.props.addSmurf(this.state);

    this.setState({

      name: '',
      age: 'age',
      height: ''

    });

    return false;

  }

  render() {

    return (

      <form onSubmit={this.handleSubmission} className='smurf-form'>

        <div><span>Name: &nbsp;</span><input type='text' name='name' onChange={this.handleChange} placeholder='name' value={this.state.name} /></div>
        <div><span>Age: &nbsp;&nbsp;&nbsp;&nbsp;</span><input type='number' placeholder='age' name='age' onChange={this.handleChange} value={this.state.age} /></div>
        <div><span>Height: </span><input type='text' name='height' placeholder='height' onChange={this.handleChange} value={this.state.height} /></div>
        <button>{this.props.smurfToUpdate ? 'Update Smurf!' : 'Add Smurf!'}</button>

      </form>

    );

  }

}

function mapStateToProps(state) {

  return {

    smurfToUpdate: state.smurfToUpdate

  }

}

export default connect(mapStateToProps, { addSmurf, updateSmurf })(SmurfForm);
