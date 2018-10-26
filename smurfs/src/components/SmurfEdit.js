import React, { Component } from 'react'
import { SmurfContainer, SmurfText } from '../styles/Smurf'

class SmurfEdit extends Component {
  constructor({ id, name, age, height }) {
    super()
    this.state = { id, name, age, height }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.updateSmurf(this.state)
    this.props.toggleEditMode()
  }

  render() {
    const { name, age, height } = this.state
    const { handleChange, handleSubmit } = this
    const { toggleEditMode } = this.props

    return (
      <SmurfContainer>
        <SmurfText>Edit these fields</SmurfText>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="text" name="name" value={name} onChange={handleChange} />
          <input type="text" name="age" value={age} onChange={handleChange} />
          <input
            type="text"
            name="height"
            value={height}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>submit changes</button>
        </form>

        <button onClick={toggleEditMode}>Discard changes</button>
      </SmurfContainer>
    )
  }
}

export default SmurfEdit
