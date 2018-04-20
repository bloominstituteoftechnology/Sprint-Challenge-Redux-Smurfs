import React, { Component } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';


class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: '',
        id: '',
      };
      handleEvent = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
      updateSmurf = (event) => {
        event.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
          name: '',
          age: '',
          height: '',
        });
      };
    
      render() {
        return (
          <div>
            <form>
              <input
                onChange={this.handleEvent}
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                onChange={this.handleEvent}
                type="number"
                name="age"
                placeholder="Age"
              />
              <input
                onChange={this.handleEvent}
                type="text"
                name="height"
                placeholder="height"
              />
              <button type="submit" onClick={this.updateSmurf}>
                Add Friend
              </button>
            </form>
          </div>
        );
      }
    }

const mapStateToProps = state => {
    return { 
      smurfs: state.smurfs,  
      addingSmurf:state.addingSmurf,
      fetchingSmurf: state.fetching,
      error: state.error,
    }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm); 