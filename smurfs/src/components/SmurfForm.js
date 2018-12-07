import React from 'react';
import {connect} from 'react-redux';
import {addSmurf, editSmurf, clearSelected} from '../actions';

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
    console.log('hs', this.props.selected);
    if (this.state.name && this.state.age && this.state.height) {
      const func = this.props.selected
        ? this.props.editSmurf
        : this.props.addSmurf;
      const args = this.props.selected
        ? {...this.state, id: this.props.selected.id}
        : this.state;
      func(args);
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
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.makeInput('name')}
          {this.makeInput('age')}
          {this.makeInput('height')}
          {this.makeInput('submit', 'submit')}
        </form>
        {this.props.selected && (
          <button onClick={this.props.clearSelected}>Clear Selected</button>
        )}
      </div>
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
  {addSmurf, editSmurf, clearSelected},
)(SmurfForm);
