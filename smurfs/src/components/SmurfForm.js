import React from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions';

class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.selected !== prevProps.selected) {
      if (this.props.selected) {
        const s = this.props.selected;
        this.setState({name: s.name, age: s.age, height: s.height});
      } else this.clearState();
    }
  }

  clearState = () => {
    this.setState({name: '', age: '', height: ''});
  };
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name && this.state.age && this.state.height) {
      this.props.addSmurf(this.state);
      this.clearState();
    }
  };

  makeInput = (name, type = 'text') => {
    return (
      <input
        type={type}
        name={name}
        placeholder={name}
        value={this.state[name]}
        onChange={this.handleChange}
      />
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.makeInput('name')}
        {this.makeInput('age')}
        {this.makeInput('height')}
        {this.makeInput('submit', 'submit')}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    selected: state.selectedSmurf,
    updating: state.updatingSmurf,
  };
};

export default connect(
  mapStateToProps,
  {addSmurf},
)(SmurfForm);
