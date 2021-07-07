import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions'

class SmurfsList extends Component {
  componentDidMount () {
    this.props.fetchSmurfs()
  }
  render () {
    return (
      <div className='App'>
        <div>
          {this.props.smurfs.map((smurf) => {
            return (
              <div>
                <h1>Name: {smurf.name}</h1>
                <h2>Age: {smurf.age}</h2>
                <h3>height: {smurf.height}</h3>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log('IN MAP STATE', state)
  return {
    smurfs: state.smurfs,
    api: state.api
  }
}
export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList)
