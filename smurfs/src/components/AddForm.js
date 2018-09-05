import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddForm extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { addSmurfs } = this.props
    const { name, age, height } = this.state
    return (
      <div>
        <input name='name' value={name} onChange={e => this.handleChange(e)}/>
        <input name='age' value={age} onChange={e => this.handleChange(e)}/>
        <input name='height' value={height} onChange={e => this.handleChange(e)}/>
        <button onClick={() => this.props.addSmurf(this.state)}>Add New</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { addSmurf })(AddForm);
