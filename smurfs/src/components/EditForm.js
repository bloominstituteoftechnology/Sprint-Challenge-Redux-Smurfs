import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateSmurf } from '../actions';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name:'',
      age:'',
      height:''
    }
  }

  componentDidMount() {
    const { id, name, age, height } = this.props.smurf;
    this.setState({
      id,
      name,
      age,
      height
    })
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  editSmurf = event => {
    event.preventDefault();
    const { id, name, age, height } = this.state;
    let editedSmurf = {id, name, age, height}
    this.props.updateSmurf(editedSmurf)
  }

  render() {
    return (
      <div className='edit'>
        <form className='edit-form' onSubmit={this.editSmurf}>Edit Smurf
          <input className='edit-input' name='name' value={this.state.name} onChange={this.changeHandler} type='text' placeholder='Name' required></input>
          <input className='edit-input' name='age' value={this.state.age} onChange={this.changeHandler} type='text' placeholder='Age' required></input>
          <input className='edit-input' name='height' value={this.state.height} onChange={this.changeHandler} type='text' placeholder='Height' required></input>
          <input className='edit-submit' type='submit' value='submit'/>
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { updateSmurf })(EditForm);