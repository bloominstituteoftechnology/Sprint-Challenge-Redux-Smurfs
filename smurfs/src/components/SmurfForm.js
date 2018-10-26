import React from 'react'
import {connect} from 'react-redux';
import {newSmurf} from '../actions'

class SmurfForm extends React.Component {
  constructor() {
    super()
      this.state ={
        name: '',
        age: '',
        height: ''
      }
  }

  addSmurf = (e) => {
    e.preventDefault();
    this.props.newSmurf(this.state)
    // console.log('this is whats going to the action', this.state)
  }

  handleInputChange = event => {
    console.log(event.target.value)
    this.setState({[event.target.name]: event.target.value})
  }
  render() {
    return (
        <div>
          <form onSubmit={this.addSmurf} >
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            <button onClick={this.addSmurf} type="submit">
              Add New Smuft
            </button>
          </form>
        </div>
        );
  }
};
const mapStateToProps = state => {
  return {
    addingSmurf: state.addingSmurf
  }
}
export default connect(
    mapStateToProps,
    {newSmurf}
 )(SmurfForm)
