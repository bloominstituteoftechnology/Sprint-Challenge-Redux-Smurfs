import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Form from './Form';
import { getSmurf, editSmurf, deleteSmurf } from '../actions';

class Smurf extends React.Component {
  state = {
    isEditing: false,
    name: '',
    age: '',
    height: ''
  }

  get id() {
    return this.props.match.params.id;
  }

  componentWillMount() {
    this.props.getSmurf(this.id);
  }

  toggleEditMode = e => {
    e.preventDefault();

    this.setState({ isEditing: true,
                    name: this.props.smurf.name,
                    age: this.props.smurf.age,
                    height: this.props.smurf.height });
  }

  handleEditCancel = e => {
    e.preventDefault();

    this.setState({ isEditing: false });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleEditSmurf = e => {
    e.preventDefault();

    const editedSmurf = {
      id: this.props.smurf.id,
      name: this.state.name,
      age: this.state.age,
      height: this.state.Height
    }

    this.props.editSmurf(editedSmurf);

    this.setState({ isEditing: false,
                    name: this.props.smurf.name,
                    age: this.props.smurf.age,
                    height: this.props.smurf.height });
  }

  handleDelete = e => {
    e.preventDefault();

    this.props.deleteSmurf(this.id);

    this.props.history.push("/");
  }

  render() {
    if (!this.props.smurf) {
      return (
        <div>Loading smurf...</div>
      )
    }

    if (this.state.isEditing) {
      return (
        <Form name={this.state.name}
              age={this.state.age}
              height={this.state.height}
              handleInputChange={this.handleInputChange}
              handleCancel={this.handleEditCancel}
              handleSmurfSubmit={this.handleEditSmurf}/>
      )
    }

    return (
      <div className="smurf-page">
        <h3>{this.props.smurf.name}</h3>
        <h3>{this.props.smurf.age}</h3>
        <h3>{this.props.smurf.height}</h3>
        <div className="buttons-container">
          <button onClick={this.toggleEditMode}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    smurf: state.smurf,
    smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, { getSmurf, editSmurf, deleteSmurf })(Smurf);
