import React, { Component } from 'react';
import './App.css';
import { getSmurfs, postSmurf, putSmurf, deleteSmurf } from '../actions';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: 0,
    height: '',
  }

  componentDidMount() {
    this.props.getSmurf();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postSmurf(this.state)
    e.target.parentNode.reset();
    this.setState({
      name: '',
      age: 0,
      height: '',
    })
  }

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.postSmurf(this.state)
    e.target.parentNode.reset();
    this.setState({
      name: '',
      age: 0,
      height: '',
    })
  }

  handleDelete = (e) => {
    this.props.deleteSmurf(e.target.parentNode.id)
  }

  handleChange = (e) => {
    this.setState({ [e.target.placeholder]: e.target.value });
  }
  render() {

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;
