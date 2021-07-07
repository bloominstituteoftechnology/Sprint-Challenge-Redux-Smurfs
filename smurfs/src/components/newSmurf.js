import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions/index'

class NewSmurf extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render () {
    return (
      <div>
        <form
          type='submit'
          onSubmit={(e) => {
            e.preventDefault()
            this.props.addSmurf(this.state)
            this.setState({ name: '', age: '', height: '' })
          }}
        >
          <input
            type='text'
            name='name'
            placeholder='Add new Smurf'
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <input
            type='number'
            name='age'
            placeholder='Age'
            value={this.state.age}
            onChange={this.handleChange}
            required
          />
          <input
            type='number'
            name='height'
            placeholder='height'
            value={this.state.height}
            onChange={this.handleChange}
            required
          />
          <button type='submit'>Add Smurf</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addSmurf })(NewSmurf)
