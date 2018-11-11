import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadSmurfs } from '../actions/smurfsActions'
import Smurf from './Smurf'
import CreateSmurfForm from './CreateSmurfForm';

class SmurfsList extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.loadSmurfs()
  }

  render(){
    return (
      <div>
        { this.props.loading ? <h1>LOADING</h1> : null }

        { this.props.error !== '' ? <h1> {this.props.error}</h1> : null }

        { this.props.smurfs.map( smurf => <Smurf smurf={smurf} key={smurf.id}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { loadSmurfs })(SmurfsList)