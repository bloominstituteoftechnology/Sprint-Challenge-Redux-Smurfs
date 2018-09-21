import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { fetchData, addSmurf, deleteSmurf } from '../actions';
import SmurfList from './SmurfList';
import AddSmurfForm from './AddSmurfForm';

class App extends Component {
  state = {
    smurfFormInputs: {
      name: '',
      age: '',
      height: '',
    },
  };

  componentDidMount() {
    this.props.fetchData();
  }

  resetForm() {
    this.setState({
      smurfFormInputs: {
        name: '',
        age: '',
        height: '',
      },
    });
  }

  handleInput = (event) => {
    this.setState({
      smurfFormInputs: {
        ...this.state.smurfFormInputs,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAddSmurf = (event) => {
    event.preventDefault();
    console.log('HandleAddSmurf');
    this.props.addSmurf(this.state.smurfFormInputs);
    this.resetForm();
  };

  render() {
    // console.log(this.props);
    if (this.props.fetchingSmurfs) return <h2>Loading Data...</h2>;
    return (
      <div className="App">
        <AddSmurfForm
          smurfFormInputs={this.state.smurfFormInputs}
          handleInput={this.handleInput}
          handleAddSmurf={this.handleAddSmurf}
        />
        <SmurfList
          smurfs={this.props.smurfs}
          deleteSmurf={this.props.deleteSmurf}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { fetchData, addSmurf, deleteSmurf }
)(App);
