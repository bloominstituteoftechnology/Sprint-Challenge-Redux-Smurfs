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

  delete = () => {
    const id = this.props.smurf.id;
    this.props.deleteSmurf(id);
  }
  render(){
    return (
      <div className='smurf-container'>
      <div className='smurf-buttons'>
      <div className='edit-button button' onClick={this.toggleEdit}><i className="far fa-edit"/></div>
      <div className='delete-button button' onClick={this.delete}><i className="far fa-trash-alt"/></div>
      </div>
      <div className='smurf-card'>
      <h3>{this.props.smurf.name}</h3>
      <p>{this.props.smurf.age} years old</p>
      <p>{this.props.smurf.height}</p>
      {this.state.editing && <Form smurf={this.props.smurf} submit={this.props.editSmurf}/>}
      </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    editing: state.editing
  }
}

export default connect(
  mapStateToProps,
  {
    editSmurf,
    deleteSmurf,
  }
)(Smurf);
