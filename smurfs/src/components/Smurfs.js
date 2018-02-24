import React from 'react';
import { loadSmurfs, removeSmurfs } from '../actions';
import { connect } from 'react-redux';
import UpdateSmurfForm from './UpdateSmurfForm';

class Smurfs extends React.Component {

  state = {
    update: false,
    smurf: {},
  }

  componentDidMount() {
    this.props.loadSmurfs();
  }

  toggleEdit = (id, name, age, height) => {
    this.setState({ update: !this.state.update, smurf: { id, name, age, height }});
  }

  removeSmurf = (id) => {
    this.props.removeSmurf(id);
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}