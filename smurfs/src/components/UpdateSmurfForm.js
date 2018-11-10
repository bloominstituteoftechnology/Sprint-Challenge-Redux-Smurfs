import React from 'react';
import { connect } from 'react-redux';

import { updateSmurf } from '../actions/index';

class updateSmurfForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    const smurf = this.props.smurfs.find(smurf => smurf.id === Number(this.props.match.params.id))
    this.setState(smurf)
  }

  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.updateSmurf(this.state)
  }

  render(){
    return (
      <form onSubmit={this.submitHandler} className="update-form">
        <input type="text" name="name" value={this.state.name} onChange={this.inputHandler}/>
        <input type="text" name="age" value={this.state.age} onChange={this.inputHandler}/>
        <input type="text" name="height" value={this.state.height} onChange={this.inputHandler}/>
        <button type="submit">Update</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { updateSmurf })(updateSmurfForm)