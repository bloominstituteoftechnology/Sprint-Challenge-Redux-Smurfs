import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
import SmurfsList from './SmurfsList';
import SmurfForm from './SmurfForm';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

const initialAppState = {
  newAge: '',
  newName: '',
  newHeight: ''
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state= initialAppState;
  }
  componentDidMount() {
    return this.props.getSmurfs()
  }

  changeHandler = (event) => {
    this.setState(...this.state, {
      [event.target.name]: event.target.value
    })
  }

  submitSmurf = (event) => {
    event.preventDefault();
    this.props.addSmurf({
      name: this.state.newName,
      age: this.state.newAge,
      height: this.state.newHeight
    });
    this.setState(initialAppState);
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingSmurfs ? <h1>Loading Smurfs...</h1> : null}
        {this.props.smurfs !== [] ? <SmurfsList smurfs={this.props.smurfs} /> : null }
        <SmurfForm submitSmurf={this.submitSmurf} newAge={this.state.newAge} newName={this.state.newName} newHeight={this.state.newHeight} changeHandler={this.changeHandler} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  savingSmurf: state.savingSmurf,
  updatingSmurf: state.updatingSmurf,
  deletingSmurf: state.deletingSmurf,
  error: state.error
});

export default connect(mapStateToProps, {getSmurfs, addSmurf})(App);
