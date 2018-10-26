import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

import { fetchSmurfs, addSmurf } from '../actions';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    nameInput: '',
    ageInput: '',
    heightInput: '',
  };

  componentDidMount = () => {
    this.props.fetchSmurfs();
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value });

  addNewSmurf = () => {
    const smurf = {
      id: this.props.smurfs.length,
      name: this.state.nameInput,
      age: this.state.ageInput,
      height: this.state.heightInput
    }
    console.log(smurf);
    this.props.addSmurf(smurf);
  }
  render() {
    return (
      <div className="App">
        <SmurfForm addNewSmurf={this.addNewSmurf}
                    handleChange={this.handleChange} />
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(App);
