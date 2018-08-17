import React, { Component } from 'react';
import {editSmurf} from '../actions';
import {connect} from 'react-redux';

class EditSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: props.smurf.id
    };
  }

  editSmurf = (event, props) => {
    event.preventDefault();
    this.props.editSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.editSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder={this.props.smurf.name}
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder={this.props.smurf.age}
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder={this.props.smurf.height}
            value={this.state.height}
            name="height"
          />
          <button type="submit">Edit the Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {state: state};
}

const mapDispatchToProps = {
  editSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSmurf);
