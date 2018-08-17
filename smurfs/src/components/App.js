import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addSmurf, getSmurfs } from '../actions';
import NewSmurf from './NewSmurf';
import Smurfs from './Smurfs';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 0,
      height: ''
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler = event => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.addSmurf(newSmurf);
    this.setState({
      name: '',
      age: 0,
      height: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurfs smurfs={this.props.smurfs} />
        <NewSmurf changeHandler={this.changeHandler} submitHandler={this.submitHandler} state={this.state} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
