import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSmurf, updateSmurf, fetchSmurf } from '../actions'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = props.selectedSmurf
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.selectedSmurf)
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = (e) => {
    this.props.updatingSmurf
      ? this.props.updateSmurf(this.state)
      : this.props.createSmurf(this.state)
    this.props.history.push('/')
  }

  buttonText = () => this.props.updatingSmurf
    ? 'Update'
    : 'Create'

  render() {
    return (
      <div>
        <input
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Smurf's name" />
        <input
          name='age'
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="Smurf's age" />
        <input
          name='height'
          value={this.state.height}
          onChange={this.handleChange}
          placeholder="Smurf's height" />
        <button onClick={this.handleSubmit}>{this.buttonText()}</button>
      </div>
    )
  }
}

class SmurfForm extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchSmurf(this.props.match.params.id)
    }
  }

  render() {
    const blankSmurf = { name: '', age: '', height: '' }
    return (
      <Form
        {...this.props}
        selectedSmurf={this.props.selectedSmurf || blankSmurf} />
    )
  }
}

const mapStateToProps = (state) => ({
  selectedSmurf: state.selectedSmurf,
  updatingSmurf: state.updatingSmurf
})

export default connect(mapStateToProps, { createSmurf, updateSmurf, fetchSmurf })(SmurfForm)


