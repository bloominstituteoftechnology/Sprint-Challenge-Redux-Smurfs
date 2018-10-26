import React from 'react';
import Form from './Form';
import { editSmurf, deleteSmurf } from '../actions';
import { connect } from 'react-redux';

class Smurf extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
    }
  }

  toggleEdit = () => {
    this.setState(prevState => ({
      editing: !prevState.editing
    }))

  }
  render(){
    return (
      <div className='smurf-container'>
      <div className='smurf-buttons'>
      <div className='edit-button button' onClick={this.toggleEdit}>Edit</div>
      <div className='delete-button button'>Delete</div>
      </div>
      <div className='smurf-card'>
      <h3>{this.props.smurf.name}</h3>
      <p>{this.props.smurf.age}</p>
      <p>{this.props.smurf.height}</p>
      {this.state.editing && <Form smurf={this.props.smurf} submit={this.props.editSmurf}/>}
      </div>
      </div>
    )
  }

}

export default connect(
  null,
  {
    editSmurf,
    deleteSmurf,
  }
)(Smurf);
