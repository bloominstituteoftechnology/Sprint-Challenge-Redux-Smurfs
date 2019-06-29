import React, { Component } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions/index';

class SmurfsForm extends Component {
  state = {
    newSmurf: {
      name: '',
      age: '',
      height: ''
    }
  };
  componentDidMount() {
    this.props.getSmurfs();
  }

  changeHandler = e => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value
      }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
    this.setState({
      newSmurf: {
        name: '',
        age: '',
        height: ''
      }
    });
  };

  render() {
    return (
      <div className='App'>
        <div>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.deleteSmurf}
              />
            );
          })}
        </div>
        <form onSubmit={this.submitHandler}>
          <h2>More the Smurfier!</h2>
          <input
            onChange={this.changeHandler}
            type='text'
            placeholder='Name'
            value={this.state.newSmurf.name}
            name='name'
          />
          <input
            onChange={this.changeHandler}
            placeholder='Age'
            value={this.state.newSmurf.age}
            name='age'
          />
          <input
            onChange={this.changeHandler}
            placeholder='Height'
            value={this.state.newSmurf.height}
            name='height'
          />
          <button className='md-button' type='submit'>
            Add Smurf
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf }
)(SmurfsForm);
