import React, { Component } from 'react';
import { createSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends Component {
    state = {
        Fields: {
            name: '',
            age: '',
            height: '',
        }
    };

    handleInput = event => {
        const { name, value } = event.target
        // console.log(name, value);
        const fields = this.state.Fields;
        // console.log('fields', fields);
        fields[name]= value
        this.setState({ Fields: fields })
    };

    submitSmurf = event => {
        event.preventDefault();
        this.props.createSmurf(this.state.Fields);
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
                onChange={this.handleInput}
                type="text"
                name="name"
                placeholder="name"
              />
              <input
                onChange={this.handleInput}
                type="number"
                name="age"
                placeholder="age"
              />
              <input
                onChange={this.handleInput}
                type="text"
                name="height"
                placeholder="height"
              />
              <button type="submit" onClick={this.submitSmurf}>
                Add Friend
              </button>
              <button type="submit" onClick={this.updateSmurf}>
                Update Friend
              </button>
            </form>
          </div>
        );
      }
    }
    const mapStateToProps = state => {
      return {
            state
      };
    };
    
    export default connect(mapStateToProps, { createSmurf })(SmurfForm);
    