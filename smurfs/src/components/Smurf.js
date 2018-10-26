import React, { Component, Fragment } from 'react'
import SmurfStatic from './SmurfStatic'
import SmurfEdit from './SmurfEdit'

class Smurf extends Component {
  state = { editing: false }

  toggleEditMode = () => {
    this.setState({ editing: !this.state.editing })
  }

  render() {
    const { editing } = this.state
    const { toggleEditMode } = this

    return (
      <Fragment>
        {editing ? (
          <SmurfEdit toggleEditMode={toggleEditMode} {...this.props} />
        ) : (
          <SmurfStatic toggleEditMode={toggleEditMode} {...this.props} />
        )}
      </Fragment>
    )
  }
}

Smurf.defaultProps = {
  name: '',
  age: '',
  height: ''
}

export default Smurf
