import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updating, deleteSmurf } from '../actions';
import EditForm from './EditForm';

class Smurf extends Component {
  constructor() {
    super();
    this.state = {
      id:'',
      name:'',
      age:'',
      height:''
    }
  }

  deleteSmurf = event => {
    let id = Number(event.target.id);
    this.props.deleteSmurf(id);
  }

  render() {
    return (
      <div className="smurf-card">
        {/* <div className="smurf-detail">Name: {this.state.name}</div>
        <div className="smurf-detail">Age: {this.state.age}</div>
        <div className="smurf-detail">Height: {this.state.height}</div>
      <div className='smurf-btns'>
        <button className='btn' onClick={() => this.props.updating(this.props.id)}>edit</button>
        <button className='btn' id={this.props.id} onClick={this.deleteSmurf}>delete</button>
      </div> */}
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