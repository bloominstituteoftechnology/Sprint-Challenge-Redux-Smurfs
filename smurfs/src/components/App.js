import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from './Form'
import Smurf from './Smurf'
import { getSmurfs } from '../actions'
import './App.css'

class App extends Component {

  componentDidMount = () => {
    this.props.getSmurfs()
  }

  render() {
    const { smurfs, pending, error } = this.props
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
	{pending ? 'Talking to server...' : null}
	{error ? `Whoops! You smurfed up. ${error.toString()}` : null}
	<Form />
	{!smurfs
	  ? 'Loading'
	  : smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)
	}
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)