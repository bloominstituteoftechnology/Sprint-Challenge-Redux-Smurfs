import React, { Component } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createSmurf = () => {
    const { name, age, height } = this.state;
    this.props.addSmurf({ name, age, height });
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  render() {
    return (
      <div className='smurfForm'>
        <input
          name='name'
          value={this.state.name}
          type='text'
          placeholder='name'
          onChange={this.handleInput}
        />
        <input
          name='age'
          value={this.state.age}
          type='text'
          placeholder='age'
          onChange={this.handleInput}
        />
        <input
          name='height'
          value={this.state.height}
          type='text'
          placeholder='height'
          onChange={this.handleInput}
        />
        <button onClick={() => this.createSmurf()}>Add More Smurfs</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps, { addSmurf })(SmurfsForm);