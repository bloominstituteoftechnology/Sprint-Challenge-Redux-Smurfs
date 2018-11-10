import React, { Component } from 'react'
import { connect } from 'react-redux'
import SmurfForm from './SmurfForm'
import { getSmurfs } from '../actions/index'

class SmurfList extends Component {

  componentDidMount() {
    this.props.getSmurfs();

  }
  render() {
    if (this.props.loading === true) return <h1>Loading</h1>
    if (this.props.error === true) return <h1>{this.props.error}</h1>
    return (
      <div>
      <h1>Redux Smurfs</h1>
        {this.props.smurfs.map((smurf) => {
        return(
        <p key={smurf.id}>Name: {smurf.name}, Age: {smurf.age}, Height: {smurf.height}</p>)
        })}
        <SmurfForm />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    loading: state.loading
  }
}
export default connect(mapStateToProps,{ getSmurfs })(SmurfList)

