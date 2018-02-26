import React, { Component } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: '',
    }
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

    handleAddSmurf = _ => {
        const { name, age, height } = this.state;
        this.props.addSmurf({ name, age, height });
        this.setState({ name: '', age: '', height: '' });
    };

    render() {
        return (
          <form className="SmurfForm">
            <input
              className="input"
              value={this.state.name}
              name="name"
              type="text"
              placeholder="Name"
              onChange={this.handleInputChange}
            />
            <input
              className="input"
              value={this.state.age}
              name="age"
              type="text"
              placeholder="Age"
              onChange={this.handleInputChange}
            />
            <input
              className="input"
              value={this.state.height}
              name="height"
              type="text"
              placeholder="Height"
              onChange={this.handleInputChange}
            />
            <button className="SmurfForm__Button" onClick={() => this.handleAddSmurf()} type="button">
              Call a Smurf Out from Hiding
            </button>
          </form>
        );
    }
}

const mapStateToProps = state => {
    return {
      error: state.error,
      addingSmurf: state.addingSmurf,
      fetchingSmurfs: state.fetchingSmurfs
    };
  };
  
  export default connect(mapStateToProps, { addSmurf })(SmurfForm);
  