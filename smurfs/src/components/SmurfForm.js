import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: '',
        id: '',
      };
      handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
      submitSmurf = (event) => {
        this.props.addSmurf(this.state);
        this.setState({
          name: '',
          age: '',
          height: '',
        });
      };
    
      render() {
        return (
          <div className="col-one-half friend-form">
            <form>
              <input
                onChange={this.handleChange}
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                onChange={this.handleChange}
                type="number"
                name="age"
                placeholder="Age"
              />
              <input
                onChange={this.handleChange}
                type="text"
                name="height"
                placeholder="height"
              />
              <button type="submit" onClick={this.submitSmurf}>
                Add Friend
              </button>
            </form>
          </div>
        );
      }
    }

const mapStateToProps = state => {
    return { 
        addingSmurf:state.addingSmurf,
        smurfs: state.smurfs,
        fetching: state.fetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm);