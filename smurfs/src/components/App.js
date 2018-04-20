import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import './App.css';

import { fetchSmurfs, addSmurf } from '../actions';
import SmurfList from './SmurfList';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();

    this.blankSmurf = {
      name: '',
      age: '',
      height: ''
    };

    this.state = {
      newSmurf: this.blankSmurf
    };
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  handleAddInputFieldChange = e => {
    const newSmurfData = { [e.target.name]: e.target.value };  
    this.setState({ newSmurf: {...this.state.newSmurf, ...newSmurfData} });
  }

  handleAddSmurfSubmit = () => {
    this.props.addSmurf(this.state.newSmurf);
    this.setState({ newSmurf: this.blankSmurf });
  }

  render() {
    return (
      <div className="App">
        <SmurfList smurfs={this.props.smurfs} />

        <input name='name' onChange={this.handleAddInputFieldChange} value={this.state.newSmurf.name} />
        <input name='age' onChange={this.handleAddInputFieldChange} value={this.state.newSmurf.age} />
        <input name='height' onChange={this.handleAddInputFieldChange} value={this.state.newSmurf.height} />
        <Button color='primary' onClick={this.handleAddSmurfSubmit}>Add A Smurf!</Button>
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
