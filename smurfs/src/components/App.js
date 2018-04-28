import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSmurfs, addSmurf } from '../actions'

import './App.css'

class App extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  componentDidMount = () => {
    this.props.getSmurfs()
  }

  handleInputChange = e => {
    const { value } = e.target
    this.setState({
      [e.target.name]: value
    })
  }

  handleSubmit = e => {
    console.log('submitting')
    e.preventDefault()
    const { name, age, height } = this.state
    this.props.addSmurf({ name, age, height })
  }

  postSmurf = smurf => {
    this.props.addSmurf(smurf)
  }

  render() {
    const { name, age, height } = this.state
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
	<form onSubmit={this.handleSubmit}>
	  <input
	    onChange={this.handleInputChange}
	    name="name"
	    type="text"
	    placeholder="Smurf name"
	    value={name}
	    />
	  <input
	    onChange={this.handleInputChange}
	    name="age"
	    type="text"
	    placeholder="Age"
	    value={age}
	    />
	  <input
	    onChange={this.handleInputChange}
	    name="height"
	    type="text"
	    placeholder="Height"
	    value={height}
	    />
	  <input type="submit" value="Add smurf"/>
	</form>
      </div>
    )
  }
}

const mapStateToProps = state => console.log(state) || ({
  smurfs: state.smurfs,
  pending: state.pending,
  error: state.error,
})

const mapDispatchToProps = {
  getSmurfs,
  addSmurf,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
