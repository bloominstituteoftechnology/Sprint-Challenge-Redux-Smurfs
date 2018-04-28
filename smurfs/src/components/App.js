import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { getSmurfs, postSmurf, deleteSmurf } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {

  state = {
    name: '',
    age: '',
    height: '',
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleInputChange = e => {
    // set the state

    this.setState({[ e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    const { name, age, height } = this.state;
    //takes click event set all to state on button press

    e.preventDefault();
    this.props.postSmurf({ name, age, height });
    this.setState({ name: '', age: '', height: '' })

  }

  handleDelete = id => {
    this.props.deleteSmurf(id);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <h2> Add a Smurf! </h2>
          <input
            onChange={this.handleInputChange}
            value={this.state.name}
            type="text"
            name="name"
            placeholder="smurf name"
            />
          <input
            onChange={this.handleInputChange}
            value={this.state.age}
            type="text"
            name="age"
            placeholder="smurf age"
            />
          <input
            onChange={this.handleInputChange}
            value={this.state.height}
            type="text"
            name="height"
            placeholder="smurf height"
            />
            <button onClick={this.handleSubmit}>Add a Smurf!</button>

            <p className="App-intro">
            My Smurfs
          </p>
          <div>
            {this.props.smurfs.map(smurf => {
              return(
                <div key={smurf.id} className="Smurf-box">
                  <div>Smurf Name: {smurf.name}</div>
                  <div>Smurf Age: {smurf.age}</div>
                  <div>Smurf Height: {smurf.height}</div>
                  <button onClick={() => this.handleDelete(smurf.id)}>Delete a Smurf!</button>
                </div>
              );
            })}
          </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    success: state.success,
    error: "",
  };
}

export default connect(mapStateToProps, { getSmurfs, postSmurf, deleteSmurf })(App);