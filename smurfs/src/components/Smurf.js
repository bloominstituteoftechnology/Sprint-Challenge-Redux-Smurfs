import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updating, deleteSmurf } from '../actions';
import EditForm from './EditForm';

class Smurf extends Component {
  constructor() {
    super();
    
  }

  deleteSmurf = event => {
    let id = Number(event.target.id);
    this.props.deleteSmurf(id);
  }

  render() {
    return (
      <div className="smurf-card">
        <div className="smurf-detail">Name: {name}</div>
        <div className="smurf-detail">Age: {age}</div>
        <div className="smurf-detail">Height: {height}</div>
      <div className='smurf-btns'>
        <div className='btn' onClick={() => this.props.updating(id)}>edit</div>
        <div className='btn' id={id} onClick={this.deleteSmurf}>delete</div>
      </div>
      <EditForm smurf={this.props.smurf}/>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    editingId: state.editingId
  }
}

export default connect(mapStateToProps, { updating, deleteSmurf })(Smurf);