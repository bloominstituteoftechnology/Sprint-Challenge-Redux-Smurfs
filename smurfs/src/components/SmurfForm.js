import React from 'react';
import { connect } from 'react-redux';

import { addSmurf, updateSmurf } from '../actions';

class SmurfForm extends React.Component {

  constructor() {

    super();

    this.state = {

      name: '',
      age: 0,
      height: ''

    }

  }

  componentDidUpdate(prevProps) {

    if (this.props.smurfToUpdate && this.props.smurfToUpdate !== prevProps.smurfToUpdate) {

      this.setState(this.props.smurfToUpdate);

    }

  }

  handleChange = e => {

    this.setState({

      [e.target.name]: e.target.value

    })

  }

  handleSubmission = e => {

    e.preventDefault();

    if (this.props.smurfToUpdate)
      this.props.updateSmurf(this.state);

    else
      this.props.addSmurf(this.state);

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
        <span>Height: </span><input type='text' name='height' placeholder='height' onChange={this.handleChange} value={this.state.height} />
        <button onClick={this.handleSubmission}>Add smurf!</button>

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
